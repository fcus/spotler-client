import { createHmac } from 'crypto';
import { HttpMethod } from '../http-method.type';
import {
    OAuthData,
    OAuthDataClass,
    OAuthOptions,
    OAuthRequest,
    OAuthToHeaderOptions,
    OAuthToken,
} from './oauth.type';

const WORD_CHARACTERS =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export class OAuth {
    static autorize(
        request: OAuthRequest,
        opts: OAuthOptions,
        token?: OAuthToken,
    ): OAuthDataClass {
        const oauthData: OAuthData = {
            oauth_consumer_key: opts.consumer.key ?? '',
            oauth_nonce: opts.nonce ?? OAuth.generateNonce(opts.nonceLength),
            oauth_signature_method: opts.signatureMethod ?? 'HMAC-SHA1',
            oauth_timestamp:
                opts.timestamp ??
                Math.round(new Date().getTime() / 1000).toString(),
            oauth_version: opts.version ?? '1.0',
        };

        if (token?.key) {
            oauthData.oauth_token = token.key;
        }

        oauthData.oauth_signature = OAuth.generateSignature(
            request.method,
            request.url,
            oauthData,
            request.data,
            opts.consumer.secret!,
            token?.secret,
            opts.encodeSignature,
            opts.signatureMethod,
        );

        return {
            ...oauthData,
            toHeader: () => OAuth.toHeader(oauthData, opts),
        };
    }

    static toHeader(oauthData: OAuthData, opts?: OAuthToHeaderOptions) {
        const sorted = OAuth.sortKeys(oauthData);

        const header = opts?.realm ? [`realm="${opts.realm}"`] : [];

        for (const { key, value } of sorted) {
            if (!key.startsWith('oauth_')) continue;
            header.push(`${OAuth.encode(key)}="${OAuth.encode(value)}"`);
        }

        const parameterSeperator = opts?.parameterSeperator ?? ', ';

        return `OAuth ${header.join(parameterSeperator)}`;
    }

    static generateNonce(length = 32) {
        return Array.from(
            { length: length },
            () =>
                WORD_CHARACTERS[
                    Math.round(Math.random() * WORD_CHARACTERS.length)
                ],
        ).join('');
    }

    static generateSignature(
        httpMethod: HttpMethod,
        url: string,
        oauthData: OAuthData,
        data: OAuthRequest['data'],
        consumerSecret: string,
        tokenSecret?: string,
        encode: boolean = false,
        signatureMethod: string = 'HMAC-SHA1',
    ) {
        const urlBaseEncoded = OAuth.encode(url.split('?')[0]);
        const paramsStringEncoded = OAuth.encodeParameters(oauthData, data);

        const _value = `${httpMethod}&${urlBaseEncoded}&${paramsStringEncoded}`;

        const signingKey = OAuth.generateSigningKey(
            consumerSecret,
            tokenSecret,
        );
        const signature = OAuth.hash(_value, signingKey, signatureMethod);
        if (encode) return OAuth.encode(signature);
        return signature;
    }

    static encodeParameters(oauthData: OAuthData, data: OAuthRequest['data']) {
        const params: Record<string, any> = {
            ...oauthData,
            ...(oauthData.oauth_body_hash ? data : {}),
        };

        const encodedParams: Record<string, string | string[]> = {};
        for (const [key, value] of Object.entries(params)) {
            encodedParams[OAuth.encode(key)] =
                value && Array.isArray(value)
                    ? value.map(OAuth.encode)
                    : OAuth.encode(value);
        }

        const encodedParamsSorted = OAuth.sortKeys(encodedParams);

        const values = [];
        for (const { key, value } of encodedParamsSorted) {
            if (value && Array.isArray(value)) {
                value.sort();
                values.push(...value.map(item => `${key}=${item}`));
            } else {
                values.push(`${key}=${value}`);
            }
        }

        return OAuth.encode(values.join('&'));
    }

    static generateSigningKey(consumerSecret?: string, tokenSecret?: string) {
        const consumerSecretEncoded = OAuth.encode(consumerSecret);
        const tokenSecretEncoded = OAuth.encode(tokenSecret);
        return `${consumerSecretEncoded}&${tokenSecretEncoded}`;
    }

    static hash(
        value: string,
        signingKey: string,
        signatureMethod: string = 'HMAC-SHA1',
    ) {
        switch (signatureMethod) {
            case 'HMAC-SHA1':
                return createHmac('sha1', signingKey)
                    .update(value)
                    .digest('base64');
            case 'HMAC-SHA256':
                return createHmac('sha256', signingKey)
                    .update(value)
                    .digest('base64');
            default:
                return value;
        }
    }

    // https://datatracker.ietf.org/doc/html/rfc3986
    static encode(str?: string) {
        if (!str) return '';
        return encodeURIComponent(str).replace(
            /[!'()\*]/g,
            char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`,
        );
    }

    static sortKeys(obj: Record<string, any>) {
        return Object.keys(obj)
            .sort()
            .map(key => ({ key, value: obj[key] }));
    }
}

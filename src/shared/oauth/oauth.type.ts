import { HttpMethod } from '../http-method.type';

export interface OAuthRequest {
    url: string;
    method: HttpMethod;
    data?: string | any;
}

export interface OAuthToHeaderOptions {
    realm?: string;
    parameterSeperator?: string;
    encodeSignature?: boolean;
}

export interface OAuthOptions {
    consumer: OAuthToken;
    nonceLength?: number;
    nonce?: string;
    timestamp?: string;
    version?: string;
    signatureMethod?: string;
    encodeSignature?: boolean;
}

export interface OAuthToken {
    key?: string;
    secret?: string;
}

export interface OAuthData {
    oauth_consumer_key: string;
    oauth_nonce: string;
    oauth_signature_method: string;
    oauth_timestamp: string;
    oauth_version: string;
    oauth_token?: string;
    oauth_body_hash?: string;
    oauth_signature?: string;
}

export interface OAuthDataClass extends OAuthData {
    toHeader(): string;
}

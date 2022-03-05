import test from 'ava';
import { OAuth } from './oauth';

test('generateNonce', t => {
    t.notThrows(() => OAuth.generateNonce());
});

test('generateSigningKey', t => {
    const signingKey = OAuth.generateSigningKey('secret', 'test');
    t.is(signingKey, 'secret&test');
});

test('encode', t => {
    const encoded = OAuth.encode('(test)!-*/');
    t.is(encoded, '%28test%29%21-%2A%2F');
});

test('sortKeys', t => {
    const result = OAuth.sortKeys({ ab: 1, bb: 2, ba: 3, aa: 4 });
    t.deepEqual(result, [
        { key: 'aa', value: 4 },
        { key: 'ab', value: 1 },
        { key: 'ba', value: 3 },
        { key: 'bb', value: 2 },
    ]);
});

test('hash sha1', t => {
    const result = OAuth.hash('test', 'secret', 'HMAC-SHA1');
    t.is(result, 'GqNJWF7X7L07nEhqMAZ+OVyks1Y=');
});

test('hash sha256', t => {
    const result = OAuth.hash('test', 'secret', 'HMAC-SHA256');
    t.is(result, 'Aymga2LNFrM+tnkr6MYLFY2Jou46h2/Omogeu0iMCRQ=');
});

test('encodeParameters', t => {
    const result = OAuth.encodeParameters(
        {
            oauth_consumer_key: 'key',
            oauth_nonce: 'nonce',
            oauth_signature_method: 'HMAC-SHA256',
            oauth_timestamp: '1',
            oauth_version: '1.0',
            oauth_token: 'token',
            oauth_body_hash: 'bodyHash',
            oauth_signature: 'signature',
        },
        {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        },
    );
    t.is(
        result,
        'a%3D1%26b%3D2%26c%3D3%26d%3D4%26oauth_body_hash%3DbodyHash%26oauth_consumer_key%3Dkey%26oauth_nonce%3Dnonce%26oauth_signature%3Dsignature%26oauth_signature_method%3DHMAC-SHA256%26oauth_timestamp%3D1%26oauth_token%3Dtoken%26oauth_version%3D1.0',
    );
});

test('generateSignature', t => {
    const result = OAuth.generateSignature(
        'GET',
        'http://localhost:3000/api/v1/campaigns?a=1&b=2',
        {
            oauth_consumer_key: 'key',
            oauth_nonce: 'meMW5KBOXmcs8gZ0C2YplIne0gKAo1Au',
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: '1646405666',
            oauth_version: '1.0',
        },
        {},
        'secret',
    );
    t.is(result, 'Hef0lrl3BKMDyiE4zGLlwcr4VXo=');
});

test('authorization', t => {
    const result = OAuth.autorize(
        {
            method: 'GET',
            url: 'http://localhost:3000/api/v1/campaigns?a=1&b=2',
        },
        {
            consumer: {
                key: 'key',
                secret: 'secret',
            },
        },
    );
    t.deepEqual(result, {
        oauth_consumer_key: 'key',
        oauth_nonce: result.oauth_nonce,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: result.oauth_timestamp,
        oauth_version: '1.0',
        oauth_signature: result.oauth_signature,
        toHeader: result.toHeader,
    } as any);
});

test('toHeader', t => {
    const result = OAuth.autorize(
        {
            method: 'GET',
            url: 'http://localhost:3000/api/v1/campaigns?a=1&b=2',
        },
        {
            consumer: {
                key: 'key',
                secret: 'secret',
            },
            signatureMethod: 'HMAC-SHA1',
        },
    );
    const header = result.toHeader();

    t.deepEqual(header, OAuth.toHeader(result));
    t.is(
        result.toHeader(),
        `OAuth oauth_consumer_key="key", oauth_nonce="${
            result.oauth_nonce
        }", oauth_signature="${OAuth.encode(
            result.oauth_signature,
        )}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${
            result.oauth_timestamp
        }", oauth_version="1.0"`,
    );
});

test('all', t => {
    const result = OAuth.autorize(
        {
            method: 'GET',
            url: 'http://localhost:3000/api/v1/campaigns?a=1&b=2',
        },
        {
            consumer: {
                key: 'key',
                secret: 'secret',
            },
            nonce: 'meMW5KBOXmcs8gZ0C2YplIne0gKAo1Au',
            timestamp: '1646405666',
        },
    );
    const header = result.toHeader();

    t.deepEqual(header, OAuth.toHeader(result));
    t.is(
        result.toHeader(),
        `OAuth oauth_consumer_key="key", oauth_nonce="meMW5KBOXmcs8gZ0C2YplIne0gKAo1Au", oauth_signature="Hef0lrl3BKMDyiE4zGLlwcr4VXo%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1646405666", oauth_version="1.0"`,
    );
});

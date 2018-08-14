module.exports = {
    PORT: process.env.PORT || 2083,
    USE_HTTPS: process.env.USE_HTTPS || true,
    HTTPS_KEY: process.env.HTTPS_KEY || '/webserver/key.key',
    HTTPS_CERT: process.env.HTTPS_CERT || '/webserver/cert.crt',
    HTTPS_CA: process.env.HTTPS_CA || '/webserver/ca.ca',
    DATABASE_URL:  process.env.DATABASE_URL || "postgres://bustabit:123456@localhost/bustabitdb",
    ENC_KEY: process.env.ENC_KEY || 'devkey',
    PRODUCTION: process.env.NODE_ENV  === 'production',

    //Do not set any of this on production

    CRASH_AT: process.env.CRASH_AT //Force the crash point
};
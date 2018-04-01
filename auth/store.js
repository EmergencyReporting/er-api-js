const Promise = require('bluebird');
const {refreshAuthorization, authorizePassword} = require('./authServices');

let authInfo = {};

const getAuth = () => authInfo;

const updateStoreInfo = auth => {
    let newAuthInfo = {
        ...auth
    };
    if (newAuthInfo.expires_in) {
        newAuthInfo.goodUntil = newAuthInfo.goodUntil
            ? newAuthInfo.goodUntil
            : Date.now() + ((newAuthInfo.expires_in - 300) * 1000);
    }

    authInfo = Object.assign({}, authInfo, newAuthInfo);

    return authInfo.access_token;
};

const getAccessToken = () => {
    const now = Date.now();
    if (authInfo.goodUntil > now && authInfo.access_token) {
        return Promise.resolve(authInfo.access_token);
    }

    if (authInfo.refresh_token) {
        return refreshAuthorization(authInfo.refresh_token, authInfo.client_id, authInfo.client_secret).then(authResult => updateStoreInfo(authResult));
    }

    if (authInfo.username && authInfo.password) {
        return authorizePassword(authInfo.username, authInfo.password, authInfo.client_id, authInfo.client_secret).then(authResult => updateStoreInfo(authResult));
    }

    return Promise.reject('Invalid auth info');
};

module.exports = {
    getAuth,
    getAccessToken,
    updateStoreInfo
};

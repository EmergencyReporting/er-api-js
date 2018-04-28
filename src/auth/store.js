import Promise from 'bluebird';
import authServices from './authServices';
import utils from '../utils';

let authInfo = {};

const authUpdateListeners = [];

const onUpdateAuth = newAuthInfo => Promise.all(authUpdateListeners.map(fn => fn(newAuthInfo)));

const updateAuthInfo = auth => {
    let goodUntil = {};
    if (auth.expires_in && !auth.goodUntil) {
        goodUntil.goodUntil = Date.now() + ((auth.expires_in - 300) * 1000);
    }

    authInfo = Object.assign({}, authInfo, auth, goodUntil);

    return onUpdateAuth(authInfo).then(() => authInfo.access_token).catch(() => authInfo.access_token);
};

const clearUserInfo = () => {
    let newAuth = {
        authUrl: authInfo.authUrl || 'https://auth.emergencyreporting.com',
        apiUrl: authInfo.apiUrl || 'https://api.emergencyreporting.com'
    }
    utils.setIfExists(newAuth, authInfo, 'client_id');
    utils.setIfExists(newAuth, authInfo, 'client_secret');
    utils.setIfExists(newAuth, authInfo, 'redirect_url');
    authInfo = {};
    return updateAuthInfo(newAuth);
};
clearUserInfo();

const logoutUserInfo = () => {
    return Promise.all([
        revokeAccessToken(authInfo.authUrl, authInfo.access_token),
            revokeRefreshToken(authInfo.authUrl, authInfo.refresh_token)
        ])
        .catch(err => {})
        .then(() => clearUserInfo());
};

const getAccessToken = () => {
    const now = Date.now();
    if (authInfo.goodUntil > now && authInfo.access_token) {
        return Promise.resolve(authInfo.access_token);
    }

    if (authInfo.refresh_token) {
        return authServices
            .refreshAuthorization(authInfo.authUrl, authInfo.refresh_token, authInfo.client_id, authInfo.client_secret)
            .then(authResult => updateAuthInfo(authResult));
    }

    if (authInfo.code) {
        return authServices
            .authorizationCode(authInfo.authUrl, code, authInfo.client_id, authInfo.client_secret, authInfo.redirect_uri)
            .then(authResult => updateAuthInfo(authResult));
    }

    if (authInfo.username && authInfo.password) {
        return authServices
            .authorizePassword(authInfo.authUrl, authInfo.username, authInfo.password, authInfo.client_id, authInfo.client_secret)
            .then(authResult => updateAuthInfo(authResult));
    }

    return Promise.reject('Invalid auth info');
};

export default {
    getApiBaseUrl : () => authInfo.apiUrl,
    addAuthUpdateListener : updateFn => {
        authUpdateListeners.push(updateFn);
    },
    getAccessToken,
    updateAuthInfo,
    logoutUserInfo,
    clearUserInfo
};

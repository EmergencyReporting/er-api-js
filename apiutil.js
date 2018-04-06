const axios = require('axios');
const {getAccessToken} = require('./auth/store');
const {getAPIEnv} = require('./env');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

module.exports = {
    erApiPostWithParams: (uriPart) => (data => getAccessToken().then(accessToken => axios({
        url: `${getAPIEnv().url}${uriPart}`,
        method: 'post',
        headers: {
            Authorization: accessToken
        },
        data
    }).then(response => response.data))),

    erApiGetFunctionWithParams: (uriPart) => (params => getAccessToken().then(accessToken => axios({
        url: `${getAPIEnv().url}${uriPart}`,
        method: 'get',
        headers: {
            Authorization: accessToken
        },
        params
    }).then(response => response.data))),

    erApiDelete: uriPart => getAccessToken().then(accessToken => axios({
        method: 'delete',
        url: `${getAPIEnv().url}${uriPart}`,
        headers: {
            Authorization: accessToken
        }
    }).then(result => result.data))
};

const axios = require('axios');
const {getAccessToken} = require('./auth/store');
const {getAPIEnv} = require('./env');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

module.exports = {
    erApiGetFunctionWithParams: (uriPart) => (params => getAccessToken().then(accessToken => axios({
        url: `${getAPIEnv().url}${uriPart}`,
        method: 'get',
        headers: {
            Authorization: accessToken
        },
        params
    }).then(response => response.data)))
};

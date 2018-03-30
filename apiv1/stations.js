const axios = require('axios');
const {getAccessToken} = require('../auth/store');
const {getAPIEnv} = require('../env');

/*
 * Supported params include: limit
 */
const getStations = params => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V1/stations`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

module.exports = {
    getStations
};

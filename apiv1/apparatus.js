const axios = require('axios');
const {getAccessToken} = require('../auth/store');
const {getAPIEnv} = require('../env');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

/*
 * Supported params include: limit
 */
const getApparatuses = params => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V1/apparatuses`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

module.exports = {
    getApparatuses
};

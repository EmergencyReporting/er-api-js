const axios = require('axios');
const { getAccessToken } = require('../auth/store');
const { getAPIEnv } = require('../env');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

/*
 * Supported params include: limit, filter, rowVersion, offset, orderby
 */
const getEvents = params => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/events`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

module.exports = {
    getEvents
};

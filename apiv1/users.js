const axios = require('axios');
const {getAccessToken} = require('../auth/store');
const {getAPIEnv} = require('../env');

const getMyUser = () => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V1/users/me`,
    method: 'get',
    headers: {
        Authorization: accessToken
    }
}).then(response => response.data));

/**
 * Supported params include
 * limit, offset, showArchived, changesSince
 *
 * https://api.emergencyreporting.com/v1/docs/index.html#api-Users-GetUsers
 */
const getUsers = (params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V1/users/`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getUser = (userID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V1/users/${userID}`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

module.exports = {
    getMyUser,
    getUsers,
    getUser
};

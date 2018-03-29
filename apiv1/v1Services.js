const axios = require('axios');
const {getAccessToken} = require('../auth/store');

let env = {
    url: 'https://api.emergencyreporting.com'
};

const setAPIv1Env = (opts) => {
    env = Object.assign({}, env, opts);
};

const getMyUser = () => getAccessToken()
    .then(accessToken => axios({
    url: `${env.url}/V1/users/me`,
    method: 'get',
    headers: {
        Authorization: accessToken
    }
}).then(response => response.data))
    .then(result => {
        console.log(`URL: ${JSON.stringify(env)}`);
        return result;
    });

/**
 * Supported params include
 * limit, offset, showArchived, changesSince
 *
 * https://api.emergencyreporting.com/v1/docs/index.html#api-Users-GetUsers
 */
const getUsers = (params) => getAccessToken().then(accessToken => axios({
    url: `${env.url}/V1/users/`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getUser = (userID, params) => getAccessToken().then(accessToken => axios({
    url: `${env.url}/V1/users/${userID}`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

module.exports = {
    getMyUser,
    getUsers,
    getUser,
    setAPIv1Env
};

const axios = require('axios');
const {getAccessToken} = require('../auth/store');
const {getAPIEnv} = require('../env');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

const getApparatuses = params => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getApparatus = (departmentApparatusID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/${departmentApparatusID}`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getApparatusMaintenance = (departmentApparatusID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/${departmentApparatusID}/maintenance`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

module.exports = {
    getApparatuses,
    getApparatus,
    getApparatusMaintenance
};

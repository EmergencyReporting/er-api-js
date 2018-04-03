const axios = require('axios');
const {getAccessToken} = require('../auth/store');
const {getAPIEnv} = require('../env');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

const getAllApparatus = params => getAccessToken().then(accessToken => axios({
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

const getAllApparatusCompartments = params => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/compartments`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getApparatusCompartment = (compartmentID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/compartments/${compartmentID}`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getAllApparatusCrews = params => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/crews`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getApparatusCrews = (departmentApparatusID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/${departmentApparatusID}/crews`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getApparatusCrew = (departmentApparatusID, crewID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/${departmentApparatusID}/crews/${crewID}`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getAllApparatusMaintenances = params => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/maintenance`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getApparatusMaintenances = (departmentApparatusID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/${departmentApparatusID}/maintenance`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

const getApparatusMaintenance = (departmentApparatusID, maintenanceID, params) => getAccessToken().then(accessToken => axios({
    url: `${getAPIEnv().url}/V2/apparatus/${departmentApparatusID}/maintenance/${maintenanceID}`,
    method: 'get',
    headers: {
        Authorization: accessToken
    },
    params
}).then(response => response.data));

module.exports = {
    getAllApparatus,
    getApparatus,
    getAllApparatusCompartments,
    getApparatusCompartment,
    getAllApparatusCrews,
    getApparatusCrews,
    getApparatusCrew,
    getAllApparatusMaintenances,
    getApparatusMaintenances,
    getApparatusMaintenance
};

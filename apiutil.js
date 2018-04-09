const axios = require('axios');
const {getAccessToken, getApiBaseUrl} = require('./auth/store');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

const missingRequiredFields = (obj, requiredFieldNames = []) => requiredFieldNames.reduce((missingReqs, req) => {
    if (typeof obj[req] === 'undefined') {
        missingReqs.push(req);
    }
    return missingReqs;
}, []);

const verifyRequired = (obj, requiredFields = []) => {
    const missingRequiredFields = missingRequiredFields(obj, requiredFields);

    if (!missingRequiredFields.length) {
        return Promise.resolve(obj);
    } else {
        return Promise.reject(`Missing required fields: ${missingRequiredFields.join(',')}`);
    }
};

module.exports = {
    erApiPostWithParams: (uriPart, requiredFields = []) => (data => verifyRequired(data, requiredFields).then(data => getAccessToken().then(accessToken => axios({
        url: `${getApiBaseUrl()}${uriPart}`,
        method: 'post',
        headers: {
            Authorization: accessToken
        },
        data
    }).then(response => response.data)))),

    erApiGetV1WithParams: (uriPart) => (p => getAccessToken().then(accessToken => {
        let params = p;
        let headers = {
            Authorization: accessToken
        };

        if (params && params.rowVersion) {
            headers.Etag = params.rowVersion;
            params = Object.assign({}, params);
            delete params.rowVersion;
        }

        return axios({url: `${getApiBaseUrl()}${uriPart}`, method: 'get', headers, params}).then(response => response.data)
    })),

    erApiGetV2WithParams: (uriPart) => (params => getAccessToken().then(accessToken => axios({
        url: `${getApiBaseUrl()}${uriPart}`,
        method: 'get',
        headers: {
            Authorization: accessToken
        },
        params
    }).then(response => response.data))),

    erApiDelete: uriPart => getAccessToken().then(accessToken => axios({
        method: 'delete',
        url: `${getApiBaseUrl()}${uriPart}`,
        headers: {
            Authorization: accessToken
        }
    }).then(result => result.data))
};

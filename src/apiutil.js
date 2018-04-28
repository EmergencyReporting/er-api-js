import axios from 'axios';
import store from './auth/store';

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

const missingRequiredFields = (obj, requiredFieldNames = []) => requiredFieldNames.reduce((missingReqs, req) => {
  if (typeof obj[req] === "undefined") {
    missingReqs.push(req);
  }
  return missingReqs;
}, []);

const verifyRequired = (obj, requiredFields = []) => {
  const missingReqFields = missingRequiredFields(obj, requiredFields);

  if (!missingReqFields.length) {
    return Promise.resolve(obj);
  } else {
    return Promise.reject(`Missing required fields: ${missingRequiredFields.join(",")}`);
  }
};

export default {
  erApiPostWithParams : (uriPart, requiredFields = []) => data => verifyRequired(data, requiredFields).then(data => getAccessToken().then(accessToken => axios({
    url: `${store.getApiBaseUrl()}${uriPart}`,
    method: "post",
    headers: {
      Authorization: accessToken
    },
    data
  }).then(response => response.data))),

  erApiGetV1WithParams : uriPart => p => store
    .getAccessToken()
    .then(accessToken => {
      let params = p;
      let headers = {
        Authorization: accessToken
      };

      if (params && params.rowVersion) {
        headers.Etag = params.rowVersion;
        params = Object.assign({}, params);
        delete params.rowVersion;
      }

      return axios({
        url: `${store.getApiBaseUrl()}${uriPart}`,
        method: "get",
        headers,
        params
      }).then(response => response.data);
    }),

  erApiGetV2WithParams : uriPart => params => store
    .getAccessToken()
    .then(accessToken => axios({
      url: `${store.getApiBaseUrl()}${uriPart}`,
      method: "get",
      headers: {
        Authorization: accessToken
      },
      params
    }).then(response => response.data)),

  erApiDelete : uriPart => resourceID => store
    .getAccessToken()
    .then(accessToken => axios({
      method: "delete",
      url: `${store.getApiBaseUrl()}${uriPart}/${resourceID}`,
      headers: {
        Authorization: accessToken
      }
    }).then(result => result.data))
};

const {erApiGetV2WithParams} = require('../apiutil');

module.exports = {
    getAccountEms: erApiGetV2WithParams('/V2/accounts/ems'),
    getAccountEm: (emsID, params) => (erApiGetV2WithParams(`/V2/accounts/ems/${emsID}`)(params))
};

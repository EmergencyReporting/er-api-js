const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getAccountEms: erApiGetFunctionWithParams('/V2/accounts/ems'),
    getAccountEm: (emsID, params) => (erApiGetFunctionWithParams(`/V2/accounts/ems/${emsID}`)(params))
};

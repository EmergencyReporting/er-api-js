const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getMyUser: erApiGetFunctionWithParams('/V1/users/me'),
    getUsers: erApiGetFunctionWithParams('/V1/users'),
    getUser: (userID, params) => (erApiGetFunctionWithParams(`/V1/users/${userID}`)(params))
};

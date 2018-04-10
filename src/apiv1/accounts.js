const {erApiGetV1WithParams} = require('../apiutil');

module.exports = {
    getMyAccount: erApiGetV1WithParams('/V1/accounts/me')
};

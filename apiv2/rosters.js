const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getRosters: erApiGetFunctionWithParams('/V2/rosters')
};

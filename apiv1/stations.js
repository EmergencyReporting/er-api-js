const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getStations: erApiGetFunctionWithParams('/V1/stations')
};

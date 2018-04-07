const {erApiGetV1WithParams} = require('../apiutil');

module.exports = {
    getStations: erApiGetV1WithParams('/V1/stations')
};

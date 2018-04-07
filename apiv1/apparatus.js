const {erApiGetV1WithParams} = require('../apiutil');

module.exports = {
    getApparatuses: erApiGetV1WithParams('/V1/apparatuses')
};

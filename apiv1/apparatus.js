const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getApparatuses: erApiGetFunctionWithParams('/V1/apparatuses')
};

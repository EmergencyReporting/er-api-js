const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getInspections: erApiGetFunctionWithParams('/V2/occupancies/inspections')
};

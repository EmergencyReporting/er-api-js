const {erApiGetV2WithParams} = require('../apiutil');

module.exports = {
    getInspections: erApiGetV2WithParams('/V2/occupancies/inspections')
};

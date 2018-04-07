const {erApiGetV2WithParams} = require('../apiutil');

module.exports = {
    getRosters: erApiGetV2WithParams('/V2/rosters')
};

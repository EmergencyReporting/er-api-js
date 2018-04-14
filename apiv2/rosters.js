const {erApiGetV2WithParams, erApiPostWithParams, erApiDelete} = require('../apiutil');

/**
 * APIv2 Rosters
 * @module apiv2/rosters
 **/

module.exports = {
  getRosters: erApiGetV2WithParams('/V2/rosters'),
  createRoster: erApiPostWithParams('/V2/rosters', ['rosterName', 'defaultStartTime', 'defaultEndTime']),
  deleteRoster: erApiDelete('/V2/rosters')
};

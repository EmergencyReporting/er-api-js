import apiutil from '../apiutil';

/**
 * APIv2 Rosters
 * @module apiv2/rosters
 **/
export default {
  getRosters : apiutil.erApiGetV2WithParams('/V2/rosters'),
  createRoster : apiutil.erApiPostWithParams('/V2/rosters', ['rosterName', 'defaultStartTime', 'defaultEndTime']),
  deleteRoster : apiutil.erApiDelete('/V2/rosters')
};

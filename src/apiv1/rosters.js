import apiutil from '../apiutil';

/**
 * APIv1 Rosters
 * @module apiv1/rosters
 **/

export default {
  /**
   * @function getEquipment
   * @desc get equipment
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  createRoster : apiutil.erApiPostWithParams("/V1/rosters", ["rosterName", "defaultStartTime", "defaultEndTime"]),
  createRosterStation : (rosterID, stationInfo) => apiutil.erApiPostWithParams(`/V1/rosters/${rosterId}/stations`, ["stationID"])(stationInfo),
  createRosterApparatus : (rosterId, apparatusInfo) => apiutil.erApiPostWithParams(`/V1/rosters/${rosterId}/apparatuses`, ["rosterStationID", "departmentApparatusID"])(apparatusInfo),
  createRosterPersonnel : (rosterId, personnelInfo) => apiutil.erApiPostWithParams(`/V1/rosters/${rosterId}/personnel`, ["rosterApparatusID", "rosterStationID", "userID", "beginTime", "endTime"])(personnelInfo),
  deleteRoster : apiutil.erApiDelete('/V1/rosters')
};

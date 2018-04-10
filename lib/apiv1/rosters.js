const {
  erApiGetV1WithParams,
  erApiPostWithParams,
  erApiDeleteWithParams
} = require("../apiutil");

/**
 * APIv1 Rosters
 * @module apiv1/rosters
 **/

module.exports = {
  /**
   * @function getEquipment
   * @desc get equipment
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  createRoster: erApiPostWithParams("/V1/rosters", [
    "rosterName",
    "defaultStartTime",
    "defaultEndTime"
  ]),
  createRosterStation: (rosterID, stationInfo) =>
    erApiPostWithParams(`/V1/rosters/${rosterId}/stations`, ["stationID"])(
      stationInfo
    ),
  createRosterApparatus: (rosterId, apparatusInfo) =>
    erApiPostWithParams(`/V1/rosters/${rosterId}/apparatuses`, [
      "rosterStationID",
      "departmentApparatusID"
    ])(apparatusInfo),
  createRosterPersonnel: (rosterId, personnelInfo) =>
    erApiPostWithParams(`/V1/rosters/${rosterId}/personnel`, [
      "rosterApparatusID",
      "rosterStationID",
      "userID",
      "beginTime",
      "endTime"
    ])(personnelInfo),
  deleteRoster: rosterID => erApiDelete(`/V1/rosters/${rosterID}`)
};

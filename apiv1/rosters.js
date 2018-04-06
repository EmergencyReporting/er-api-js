const {erApiGetFunctionWithParams, erApiPostWithParams, erApiDeleteWithParams} = require('../apiutil');

module.exports = {
    createRoster: (rosterName, defaultStartTime, defaultEndTime, ...params) => erApiPostWithParams('/V1/rosters')({
        rosterName,
        defaultStartTime,
        defaultEndTime,
        ...params
    }),

    createRosterStation: (rosterId, stationID, ...params) => erApiPostWithParams(`/V1/rosters/${rosterId}/stations`)({
        stationID,
        ...params
    }),
    createRosterApparatus: (rosterId, rosterStationID, departmentApparatusID, ...params) => erApiPostWithParams(`/V1/rosters/${rosterId}/apparatuses`)({
        departmentApparatusID,
        rosterStationID,
        ...params
    }),
    createRosterPersonnel: (rosterId, rosterApparatusID, rosterStationID, userID, beginTime, endTime, ...params) => erApiPostWithParams(`/V1/rosters/${rosterId}/personnel`)({
        rosterApparatusID,
        rosterStationID,
        userID,
        beginTime,
        endTime,
        ...params
    }),
    deleteRoster: rosterID => erApiDelete(`/V1/rosters/${rosterID}`)
};

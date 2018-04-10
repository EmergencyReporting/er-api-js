const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Daily Log
 * @module apiv2/dailylog
 **/

module.exports = {
  getDailyLogs: erApiGetV2WithParams("/V2/dailylog"),
  getDailyLog: (dailyLogID, params) =>
    erApiGetV2WithParams(`/V2/dailylog/${dailyLogID}`)(params)
};

import apiutil from '../apiutil';

/**
 * APIv2 Daily Log
 * @module apiv2/dailylog
 **/
export default {
  getDailyLogs : apiutil.erApiGetV2WithParams("/V2/dailylog"),
  getDailyLog : (dailyLogID, params) => apiutil.erApiGetV2WithParams(`/V2/dailylog/${dailyLogID}`)(params)
};

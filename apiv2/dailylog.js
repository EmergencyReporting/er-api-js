const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getDailyLogs: erApiGetFunctionWithParams('/V2/dailylog'),
    getDailyLog: (dailyLogID, params) => (erApiGetFunctionWithParams(`/V2/dailylog/${dailyLogID}`)(params))
};

const {erApiGetV2WithParams} = require('../apiutil');

module.exports = {
    getDailyLogs: erApiGetV2WithParams('/V2/dailylog'),
    getDailyLog: (dailyLogID, params) => (erApiGetV2WithParams(`/V2/dailylog/${dailyLogID}`)(params))
};

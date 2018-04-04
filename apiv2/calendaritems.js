const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getCalendarItems: erApiGetFunctionWithParams('/V2/calendaritems'),
    getCalendarItem: (calendarItemID, params) => (erApiGetFunctionWithParams(`/V2/calendaritems/${calendarItemID}`)(params))
};

const {erApiGetV2WithParams} = require('../apiutil');

module.exports = {
    getCalendarItems: erApiGetV2WithParams('/V2/calendaritems'),
    getCalendarItem: (calendarItemID, params) => (erApiGetV2WithParams(`/V2/calendaritems/${calendarItemID}`)(params))
};

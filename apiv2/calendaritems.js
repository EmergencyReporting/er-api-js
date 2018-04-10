const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Calendar Items
 * @module apiv2/calendaritems
 **/

module.exports = {
  getCalendarItems: erApiGetV2WithParams("/V2/calendaritems"),
  getCalendarItem: (calendarItemID, params) =>
    erApiGetV2WithParams(`/V2/calendaritems/${calendarItemID}`)(params)
};

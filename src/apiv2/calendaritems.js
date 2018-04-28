import apiutil from '../apiutil';

/**
 * APIv2 Calendar Items
 * @module apiv2/calendaritems
 **/

export default {
  getCalendarItems : apiutil.erApiGetV2WithParams("/V2/calendaritems"),
  getCalendarItem : (calendarItemID, params) => apiutil.erApiGetV2WithParams(`/V2/calendaritems/${calendarItemID}`)(params)
};

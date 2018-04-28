import apiutil from '../apiutil';

/**
 * APIv2 Events
 * @module apiv2/events
 **/
export default {
  getEvents : apiutil.erApiGetV2WithParams("/V2/events"),
  getEvent : (eventID, params) => apiutil.erApiGetV2WithParams(`/V2/events/${eventID}`)(params),
  getEventsPeoples : apiutil.erApiGetV2WithParams("/V2/events/people"),
  getEventPeoples : (eventID, params) => apiutil.erApiGetV2WithParams(`/V2/events/${eventID}/people`)(params)
};

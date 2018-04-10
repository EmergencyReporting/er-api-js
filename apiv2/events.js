const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Events
 * @module apiv2/events
 **/

module.exports = {
  getEvents: erApiGetV2WithParams("/V2/events"),
  getEvent: (eventID, params) =>
    erApiGetV2WithParams(`/V2/events/${eventID}`)(params),
  getEventsPeoples: erApiGetV2WithParams("/V2/events/people"),
  getEventPeoples: (eventID, params) =>
    erApiGetV2WithParams(`/V2/events/${eventID}/people`)(params)
};

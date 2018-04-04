const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getEvents: erApiGetFunctionWithParams('/V2/events'),
    getEvent: (eventID, params) => (erApiGetFunctionWithParams(`/V2/events/${eventID}`)(params)),
    getEventsPeoples: erApiGetFunctionWithParams('/V2/events/people'),
    getEventPeoples: (eventID, params) => (erApiGetFunctionWithParams(`/V2/events/${eventID}/people`)(params))
};

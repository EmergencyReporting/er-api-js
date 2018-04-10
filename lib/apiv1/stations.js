const { erApiGetV1WithParams } = require("../apiutil");

/**
 * APIv1 Stations
 * @module apiv1/stations
 **/

module.exports = {
  getStations: erApiGetV1WithParams("/V1/stations")
};

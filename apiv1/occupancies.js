const { erApiGetV1WithParams } = require("../apiutil");

/**
 * APIv2 Inspections
 * @module apiv2/inspections
 **/

module.exports = {
  // https://preprodapi.emergencyreporting.com/v1/docs/index.html#api-Occupancies-GetOccupancies
  getOccupancies: erApiGetV1WithParams("/V1/occupancies")
};

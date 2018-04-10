const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Inspections
 * @module apiv2/inspections
 **/

module.exports = {
  getInspections: erApiGetV2WithParams("/V2/occupancies/inspections")
};

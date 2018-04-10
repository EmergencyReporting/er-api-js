const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Rosters
 * @module apiv2/rosters
 **/

module.exports = {
  getRosters: erApiGetV2WithParams("/V2/rosters")
};

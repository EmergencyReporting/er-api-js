const { erApiGetV1WithParams } = require("../apiutil");

/**
 * APIv1 Apparatus
 * @module apiv1/apparatus
 **/

module.exports = {
  /**
   * @function getApparatuses
   * @desc get apparatuses
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getApparatuses: erApiGetV1WithParams("/V1/apparatuses")
};

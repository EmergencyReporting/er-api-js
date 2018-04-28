import apiutil from '../apiutil';

/**
 * APIv1 Apparatus
 * @module apiv1/apparatus
 **/

export default {
  /**
   * @function getApparatuses
   * @desc get apparatuses
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getApparatuses : apiutil.erApiGetV1WithParams("/V1/apparatuses")
};

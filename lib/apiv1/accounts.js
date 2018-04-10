const { erApiGetV1WithParams } = require("../apiutil");

/**
 * APIv1 Accounts
 * @module apiv1/accounts
 **/

module.exports = {
  /**
   * @function getMyAccount
   * @desc get your account
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getMyAccount: erApiGetV1WithParams("/V1/accounts/me")
};

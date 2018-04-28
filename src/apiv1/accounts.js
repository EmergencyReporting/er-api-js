import apiutil from '../apiutil';

/**
 * APIv1 Accounts
 * @module apiv1/accounts
 **/

export default {
  /**
   * @function getMyAccount
   * @desc get your account
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getMyAccount : apiutil.erApiGetV1WithParams("/V1/accounts/me")
};

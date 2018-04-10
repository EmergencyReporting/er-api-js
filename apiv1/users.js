const { erApiGetV1WithParams } = require("../apiutil");

/**
 * APIv1 Users
 * @module apiv1/users
 **/

module.exports = {
  getMyUser: erApiGetV1WithParams("/V1/users/me"),
  getUsers: erApiGetV1WithParams("/V1/users"),
  getUser: (userID, params) =>
    erApiGetV1WithParams(`/V1/users/${userID}`)(params)
};

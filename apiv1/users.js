const {erApiGetV1WithParams, erApiPostWithParams} = require("../apiutil");

/**
 * APIv1 Users
 * @module apiv1/users
 **/

module.exports = {
  getMyUser: erApiGetV1WithParams("/V1/users/me"),
  getUsers: erApiGetV1WithParams("/V1/users"),
  getUser: (userID, params) => erApiGetV1WithParams(`/V1/users/${userID}`)(params),
  /**
     * certInfo includes certificationNameID, grantedDate, notes, expirationDate
     * https://preprodapi.emergencyreporting.com/v1/docs/index.html#api-Users-Create_User_Certification
     */
  createUserCertification: (userID, certInfo) => erApiPostWithParams(`/V1/users/${userID}/certifications`, ['certificationNameID', 'grantedDate'])(certInfo),
  createCertificationType: erApiPostWithParams('/V1/users/certificationtypes', ['name', 'description']),
  getCertificationTypes: erApiGetV1WithParams('/V1/users/certificationtypes'),
  createCertificationName: erApiPostWithParams('/V1/users/certificationnames', ['name', 'certificationTypeID']),
  getCertificationNames: erApiGetV1WithParams('/V1/users/certificationnames')
};

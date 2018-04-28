import apiutil from '../apiutil';

/**
 * APIv1 Users
 * @module apiv1/users
 **/

export default {
  getMyUser : apiutil.erApiGetV1WithParams("/V1/users/me"),
  getUsers : apiutil.erApiGetV1WithParams("/V1/users"),
  getUser : (userID, params) => apiutil.erApiGetV1WithParams(`/V1/users/${userID}`)(params),
  /**
     * certInfo includes certificationNameID, grantedDate, notes, expirationDate
     * https://preprodapi.emergencyreporting.com/v1/docs/index.html#api-Users-Create_User_Certification
     */
  createUserCertification : (userID, certInfo) => apiutil.erApiPostWithParams(`/V1/users/${userID}/certifications`, ['certificationNameID', 'grantedDate'])(certInfo),
  createCertificationType : apiutil.erApiPostWithParams('/V1/users/certificationtypes', ['name', 'description']),
  getCertificationTypes : apiutil.erApiGetV1WithParams('/V1/users/certificationtypes'),
  createCertificationName : apiutil.erApiPostWithParams('/V1/users/certificationnames', ['name', 'certificationTypeID']),
  getCertificationNames : apiutil.erApiGetV1WithParams('/V1/users/certificationnames')
};

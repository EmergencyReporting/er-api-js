import apiutil from '../apiutil';

/**
 * APIv2 Classes
 * @module apiv2/classes
 **/
export default {
  getClasses : apiutil.erApiGetV2WithParams("/V2/classes"),
  getClass : (classID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/${classID}`)(params),
  getClassCategories : apiutil.erApiGetV2WithParams("/V2/classes/categories"),
  getClassCategory : (categoryID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/categories/${categoryID}`)(params),
  getClassAgencyCodes : apiutil.erApiGetV2WithParams("/V2/classes/agencycodecategories"),
  getClassAgencyCode : (agencyCodeCategoryID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/agencycodecategories/${agencyCodeCategoryID}`)(params),
  getClassLocations : apiutil.erApiGetV2WithParams("/V2/classes/locations"),
  getClassLocation : (locationID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/locations/${locationID}`)(params),
  getClassesInstructors : apiutil.erApiGetV2WithParams("/V2/classes/instructors"),
  getClassInstructors : (classID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/${classID}/instructors`)(params),
  getClassInstructor : (classID, instructorID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/${classID}/instructors/${instructorID}`)(params),
  getClassTrainingCodes : (classID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/${classID}/trainingcodes`)(params),
  getClassTrainingCode : (classID, trainingCodeID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/${classID}/trainingcodes/${trainingCodeID}`)(params),
  getClassesStudents : apiutil.erApiGetV2WithParams("/V2/classes/students"),
  getClassStudents : (classID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/${classID}/students`)(params),
  getClassStudent : (classID, studentID, params) => apiutil.erApiGetV2WithParams(`/V2/classes/${classID}/students/${studentID}`)(params)
};

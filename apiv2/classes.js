const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getClasses: erApiGetFunctionWithParams('/V2/classes'),
    getClass: (classID, params) => (erApiGetFunctionWithParams(`/V2/classes/${classID}`)(params)),
    getClassCategories: erApiGetFunctionWithParams('/V2/classes/categories'),
    getClassCategory: (categoryID, params) => (erApiGetFunctionWithParams(`/V2/classes/categories/${categoryID}`)(params)),
    getClassAgencyCodes: erApiGetFunctionWithParams('/V2/classes/agencycodecategories'),
    getClassAgencyCode: (agencyCodeCategoryID, params) => (erApiGetFunctionWithParams(`/V2/classes/agencycodecategories/${agencyCodeCategoryID}`)(params)),
    getClassLocations: erApiGetFunctionWithParams('/V2/classes/locations'),
    getClassLocation: (locationID, params) => (erApiGetFunctionWithParams(`/V2/classes/locations/${locationID}`)(params)),
    getClassesInstructors: erApiGetFunctionWithParams('/V2/classes/instructors'),
    getClassInstructors: (classID, params) => (erApiGetFunctionWithParams(`/V2/classes/${classID}/instructors`)(params)),
    getClassInstructor: (classID, instructorID, params) => (erApiGetFunctionWithParams(`/V2/classes/${classID}/instructors/${instructorID}`)(params)),
    getClassTrainingCodes: (classID, params) => (erApiGetFunctionWithParams(`/V2/classes/${classID}/trainingcodes`)(params)),
    getClassTrainingCode: (classID, trainingCodeID, params) => (erApiGetFunctionWithParams(`/V2/classes/${classID}/trainingcodes/${trainingCodeID}`)(params)),
    getClassesStudents: erApiGetFunctionWithParams('/V2/classes/students'),
    getClassStudents: (classID, params) => (erApiGetFunctionWithParams(`/V2/classes/${classID}/students`)(params)),
    getClassStudent: (classID, studentID, params) => (erApiGetFunctionWithParams(`/V2/classes/${classID}/students/${studentID}`)(params))
};

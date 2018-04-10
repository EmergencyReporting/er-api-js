const {erApiGetV2WithParams} = require('../apiutil');

module.exports = {
    getClasses: erApiGetV2WithParams('/V2/classes'),
    getClass: (classID, params) => (erApiGetV2WithParams(`/V2/classes/${classID}`)(params)),
    getClassCategories: erApiGetV2WithParams('/V2/classes/categories'),
    getClassCategory: (categoryID, params) => (erApiGetV2WithParams(`/V2/classes/categories/${categoryID}`)(params)),
    getClassAgencyCodes: erApiGetV2WithParams('/V2/classes/agencycodecategories'),
    getClassAgencyCode: (agencyCodeCategoryID, params) => (erApiGetV2WithParams(`/V2/classes/agencycodecategories/${agencyCodeCategoryID}`)(params)),
    getClassLocations: erApiGetV2WithParams('/V2/classes/locations'),
    getClassLocation: (locationID, params) => (erApiGetV2WithParams(`/V2/classes/locations/${locationID}`)(params)),
    getClassesInstructors: erApiGetV2WithParams('/V2/classes/instructors'),
    getClassInstructors: (classID, params) => (erApiGetV2WithParams(`/V2/classes/${classID}/instructors`)(params)),
    getClassInstructor: (classID, instructorID, params) => (erApiGetV2WithParams(`/V2/classes/${classID}/instructors/${instructorID}`)(params)),
    getClassTrainingCodes: (classID, params) => (erApiGetV2WithParams(`/V2/classes/${classID}/trainingcodes`)(params)),
    getClassTrainingCode: (classID, trainingCodeID, params) => (erApiGetV2WithParams(`/V2/classes/${classID}/trainingcodes/${trainingCodeID}`)(params)),
    getClassesStudents: erApiGetV2WithParams('/V2/classes/students'),
    getClassStudents: (classID, params) => (erApiGetV2WithParams(`/V2/classes/${classID}/students`)(params)),
    getClassStudent: (classID, studentID, params) => (erApiGetV2WithParams(`/V2/classes/${classID}/students/${studentID}`)(params))
};

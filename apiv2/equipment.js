const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getAllEquipment: erApiGetFunctionWithParams('/V2/equipment'),
    getEquipment: (equipmentID, params) => (erApiGetFunctionWithParams(`/V2/equipment/${equipmentID}`)(params)),
    getEquipmentCategories: erApiGetFunctionWithParams('/V2/equipment/categories'),
    getEquipmentCategory: (equipmentCategoryID, params) => (erApiGetFunctionWithParams(`/V2/equipment/categories/${equipmentCategoryID}`)(params)),
    getAllEquipmentMaintenances: erApiGetFunctionWithParams('/V2/equipment/maintenance'),
    getEquipmentMaintenances: (equipmentID, params) => (erApiGetFunctionWithParams(`/V2/equipment/${equipmentID}/maintenance`)(params)),
    getEquipmentMaintenance: (equipmentID, maintenanceID, params) => (erApiGetFunctionWithParams(`/V2/equipment/${equipmentID}/maintenance/${maintenanceID}`)(params))
};

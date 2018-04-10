const {erApiGetV1WithParams} = require('../apiutil');

module.exports = {
    getAllEquipment: erApiGetV1WithParams('/V1/equipment'),
    getAllEquipmentCategories: erApiGetV1WithParams('/V1/equipment/categories'),
    getAllEquipmentMaintenances: erApiGetV1WithParams('/V1/equipment/maintenance'),
    getAllEquipmentMaintenanceFiles: erApiGetV1WithParams('/V1/equipment/maintenancefiles'),
    getEquipment: (equipmentID, params) => erApiGetV1WithParams(`/V1/equipment/${equipmentID}`)(params),
    getEquipmentCategory: (equipmentCategoryID, params) => erApiGetV1WithParams(`/V1/equipment/categories/${equipmentCategoryID}`)(params),
    getEquipmentHistory: (equipmentID, params) => erApiGetV1WithParams(`/V1/equipment/${equipmentID}/history`)(params),
    getEquipmentMaintenances: (equipmentID, params) => erApiGetV1WithParams(`/V1/equipment/${equipmentID}/maintenance`)(params),
    getEquipmentMaintenance: (equipmentID, maintenanceID, params) => erApiGetV1WithParams(`/V1/equipment/${equipmentID}/maintenance/${maintenanceID}`)(params),
    getEquipmentServiceHistory: (equipmentID, params) => erApiGetV1WithParams(`/V1/equipment/${equipmentID}/servicehistory`)(params)
};

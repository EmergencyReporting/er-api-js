const {erApiGetV2WithParams} = require('../apiutil');

module.exports = {
    getAllEquipment: erApiGetV2WithParams('/V2/equipment'),
    getEquipment: (equipmentID, params) => (erApiGetV2WithParams(`/V2/equipment/${equipmentID}`)(params)),
    getEquipmentCategories: erApiGetV2WithParams('/V2/equipment/categories'),
    getEquipmentCategory: (equipmentCategoryID, params) => (erApiGetV2WithParams(`/V2/equipment/categories/${equipmentCategoryID}`)(params)),
    getAllEquipmentMaintenances: erApiGetV2WithParams('/V2/equipment/maintenance'),
    getEquipmentMaintenances: (equipmentID, params) => (erApiGetV2WithParams(`/V2/equipment/${equipmentID}/maintenance`)(params)),
    getEquipmentMaintenance: (equipmentID, maintenanceID, params) => (erApiGetV2WithParams(`/V2/equipment/${equipmentID}/maintenance/${maintenanceID}`)(params))
};

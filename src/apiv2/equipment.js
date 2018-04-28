import apiutil from '../apiutil';

/**
 * APIv2 Equipment
 * @module apiv2/equipment
 **/
export default {
  getAllEquipment : apiutil.erApiGetV2WithParams("/V2/equipment"),
  getEquipment : (equipmentID, params) => apiutil.erApiGetV2WithParams(`/V2/equipment/${equipmentID}`)(params),
  getEquipmentCategories : apiutil.erApiGetV2WithParams("/V2/equipment/categories"),
  getEquipmentCategory : (equipmentCategoryID, params) => apiutil.erApiGetV2WithParams(`/V2/equipment/categories/${equipmentCategoryID}`)(params),
  getAllEquipmentMaintenances : apiutil.erApiGetV2WithParams("/V2/equipment/maintenance"),
  getEquipmentMaintenances : (equipmentID, params) => apiutil.erApiGetV2WithParams(`/V2/equipment/${equipmentID}/maintenance`)(params),
  getEquipmentMaintenance : (equipmentID, maintenanceID, params) => apiutil.erApiGetV2WithParams(`/V2/equipment/${equipmentID}/maintenance/${maintenanceID}`)(params)
};

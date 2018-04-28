import apiutil from '../apiutil';

/**
 * APIv2 Apparatus
 * @module apiv2/apparatus
 **/

export default {
  getAllApparatus : apiutil.erApiGetV2WithParams("/V2/apparatus"),
  getApparatus : (departmentApparatusID, params) => apiutil.erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}`)(params),
  getAllApparatusCompartments : apiutil.erApiGetV2WithParams("/V2/apparatus/compartments"),
  getApparatusCompartment : (compartmentID, params) => apiutil.erApiGetV2WithParams(`/V2/apparatus/compartments/${compartmentID}`)(params),
  getAllApparatusCrews : apiutil.erApiGetV2WithParams("/V2/apparatus/crews"),
  getApparatusCrews : (departmentApparatusID, params) => apiutil.erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}/crews`)(params),
  getApparatusCrew : (departmentApparatusID, crewID, params) => apiutil.erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}/crews/${crewID}`)(params),
  getAllApparatusMaintenances : apiutil.erApiGetV2WithParams("/V2/apparatus/maintenance"),
  getApparatusMaintenances : (departmentApparatusID, params) => apiutil.erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}/maintenance`)(params),
  getApparatusMaintenance : (departmentApparatusID, maintenanceID, params) => apiutil.erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}/maintenance/${maintenanceID}`)(params),
  createApparatusMaintenance : (departmentApparatusID, maintenanceInfo) => apiutil.erApiPostWithParams(`/V2/apparatus/${departmentApparatusID}/maintenance`, [])(maintenanceInfo)
};

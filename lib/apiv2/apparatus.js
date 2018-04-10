const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Apparatus
 * @module apiv2/apparatus
 **/

module.exports = {
  getAllApparatus: erApiGetV2WithParams("/V2/apparatus"),
  getApparatus: (departmentApparatusID, params) =>
    erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}`)(params),
  getAllApparatusCompartments: erApiGetV2WithParams(
    "/V2/apparatus/compartments"
  ),
  getApparatusCompartment: (compartmentID, params) =>
    erApiGetV2WithParams(`/V2/apparatus/compartments/${compartmentID}`)(params),
  getAllApparatusCrews: erApiGetV2WithParams("/V2/apparatus/crews"),
  getApparatusCrews: (departmentApparatusID, params) =>
    erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}/crews`)(
      params
    ),
  getApparatusCrew: (departmentApparatusID, crewID, params) =>
    erApiGetV2WithParams(
      `/V2/apparatus/${departmentApparatusID}/crews/${crewID}`
    )(params),
  getAllApparatusMaintenances: erApiGetV2WithParams(
    "/V2/apparatus/maintenance"
  ),
  getApparatusMaintenances: (departmentApparatusID, params) =>
    erApiGetV2WithParams(`/V2/apparatus/${departmentApparatusID}/maintenance`)(
      params
    ),
  getApparatusMaintenance: (departmentApparatusID, maintenanceID, params) =>
    erApiGetV2WithParams(
      `/V2/apparatus/${departmentApparatusID}/maintenance/${maintenanceID}`
    )(params),
  createApparatusMaintenance: (departmentApparatusID, maintenanceInfo) =>
    erApiPostWithParams(
      `/V2/apparatus/${departmentApparatusID}/maintenance`,
      []
    )(maintenanceInfo)
};

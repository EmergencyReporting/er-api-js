const { erApiGetV1WithParams } = require("../apiutil");

/**
 * APIv1 Equipment
 * @module apiv1/equipment
 **/

module.exports = {
  /**
   * @function getAllEquipment
   * @desc get all equipment
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getAllEquipment: erApiGetV1WithParams("/V1/equipment"),

  /**
   * @function getAllEquipmentCategories
   * @desc get all equipment categories
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getAllEquipmentCategories: erApiGetV1WithParams("/V1/equipment/categories"),

  /**
   * @function getAllEquipmentMaintenances
   * @desc get all equipment maintenances
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getAllEquipmentMaintenances: erApiGetV1WithParams(
    "/V1/equipment/maintenance"
  ),

  /**
   * @function getAllEquipmentMaintenanceFiles
   * @desc get all equipment maintenance files
   * @return {Function} Promise
   * @param {String} uriPart endpoint path
   */
  getAllEquipmentMaintenanceFiles: erApiGetV1WithParams(
    "/V1/equipment/maintenancefiles"
  ),

  /**
   * @function getEquipment
   * @desc get equipment
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  getEquipment: (equipmentID, params) =>
    erApiGetV1WithParams(`/V1/equipment/${equipmentID}`)(params),

  /**
   * @function getEquipmentCategory
   * @desc get equipment category
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  getEquipmentCategory: (equipmentCategoryID, params) =>
    erApiGetV1WithParams(`/V1/equipment/categories/${equipmentCategoryID}`)(
      params
    ),

  /**
   * @function getEquipmentHistory
   * @desc get equipment history
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  getEquipmentHistory: (equipmentID, params) =>
    erApiGetV1WithParams(`/V1/equipment/${equipmentID}/history`)(params),

  /**
   * @function getEquipmentMaintenances
   * @desc get equipment maintenances
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  getEquipmentMaintenances: (equipmentID, params) =>
    erApiGetV1WithParams(`/V1/equipment/${equipmentID}/maintenance`)(params),

  /**
   * @function getEquipmentMaintenance
   * @desc get equipment maintenance
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  getEquipmentMaintenance: (equipmentID, maintenanceID, params) =>
    erApiGetV1WithParams(
      `/V1/equipment/${equipmentID}/maintenance/${maintenanceID}`
    )(params),

  /**
   * @function getEquipmentServiceHistory
   * @desc get equipment service history
   * @return {Function} Promise
   * @param {String} equipmentID id of equipment
   * @param {Object} params key/val object
   */
  getEquipmentServiceHistory: (equipmentID, params) =>
    erApiGetV1WithParams(`/V1/equipment/${equipmentID}/servicehistory`)(params)
};

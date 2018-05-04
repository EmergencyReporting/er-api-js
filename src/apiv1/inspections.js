import apiutil from '../apiutil';

/**
 * APIv1 Inspections
 * @module apiv1/inspections
 **/

export default {
    getOccupancyInspections : (occupancyID, params) => apiutil.erApiGetV1WithParams(`/V1/occupancies/${occupancyID}/inspections`)(params)
};

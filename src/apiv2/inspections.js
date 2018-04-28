import apiutil from '../apiutil';

/**
 * APIv2 Inspections
 * @module apiv2/inspections
 **/
export default {
  getInspections : apiutil.erApiGetV2WithParams("/V2/occupancies/inspections")
};

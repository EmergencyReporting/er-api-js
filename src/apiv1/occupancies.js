import apiutil from '../apiutil';

/**
 * APIv1 Occupancies
 * @module apiv1/occupancies
 **/

export default {
    getOccupancies : apiutil.erApiGetV1WithParams('/V1/occupancies/')
};

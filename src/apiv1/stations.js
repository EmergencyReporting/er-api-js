import apiutil from '../apiutil';

/**
 * APIv1 Stations
 * @module apiv1/stations
 **/

export default {
  getStations : apiutil.erApiGetV1WithParams("/V1/stations")
};

import apiutil from '../apiutil';

/**
 * APIv2 Exposures
 * @module apiv2/exposures
 **/
export default {
    /**
     * @function getAllExposureNarratives
     * @desc get all the naratives for all exposures.
     * @return {Function} Promise
     * @param {Object} params
     */
    getAllExposureNarratives : apiutil.erApiGetV2WithParams('/V2/exposures/narratives'),
    getExposureNarratives : (exposureID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/narratives`)(params),
    getExposureNarrative : (exposureID, narrativeID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/narratives/${narrativeID}`)(params),
    getAllIncidentExposures : apiutil.erApiGetV2WithParams('/V2/incidents/exposures'),
    getIncidentExposures : (incidentID, params) => apiutil.erApiGetV2WithParams(`/V2/incidents/${incidentID}/exposures`)(params),
    getIncidentExposure : (incidentID, exposureID, params) => apiutil.erApiGetV2WithParams(`/V2/incidents/${incidentID}/exposures/${exposureID}`)(params),
    getAllExposuresLocations : apiutil.erApiGetV2WithParams('/V2/exposures/location'),
    getExposureLocations : (exposureID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/location`)(params),
    getAllExposuresApparatuses : apiutil.erApiGetV2WithParams('/V2/exposures/apparatuses'),
    getExposureApparatuses : (exposureID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/apparatuses`)(params),
    getExposureApparatus : (exposureID, apparatusID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/apparatuses/${apparatusID}`)(params),
    getExposureFires : (exposureID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/fire`)(params),
    getAllExposuresFires : apiutil.erApiGetV2WithParams('/V2/exposures/fire'),
    getAllExposuresCrewMembers : apiutil.erApiGetV2WithParams('/V2/exposures/crewmembers'),
    getExposureCrewMembers : (exposureID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/crewmembers`)(params),
    getExposurePatients : (exposureID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/patients`)(params),
    getExposurePatient : (exposureID, patientID, params) => apiutil.erApiGetV2WithParams(`/V2/exposures/${exposureID}/patients/${patientID}`)(params)
};

const { erApiGetV2WithParams } = require('../apiutil');

/**
 * APIv2 Exposures
 * @module apiv2/exposures
 **/
module.exports = {
    /**
     * @function getAllExposureNarratives
     * @desc get all the naratives for all exposures.
     * @return {Function} Promise
     * @param {Object} params
     */
    getAllExposureNarratives: erApiGetV2WithParams('/V2/exposures/narratives'),
    getExposureNarratives: (exposureID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/narratives`)(params),
    getExposureNarrative: (exposureID, narrativeID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/narratives/${narrativeID}`)(params),
    getAllIncidentExposures: erApiGetV2WithParams('/V2/incidents/exposures'),
    getIncidentExposures: (incidentID, params) => erApiGetV2WithParams(`/V2/incidents/${incidentID}/exposures`)(params),
    getIncidentExposure: (incidentID, exposureID, params) => erApiGetV2WithParams(`/V2/incidents/${incidentID}/exposures/${exposureID}`)(params),
    getAllExposuresLocations: erApiGetV2WithParams('/V2/exposures/location'),
    getExposureLocations: (exposureID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/location`)(params),
    getAllExposuresApparatuses: erApiGetV2WithParams('/V2/exposures/apparatuses'),
    getExposureApparatuses: (exposureID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/apparatuses`)(params),
    getExposureApparatus: (exposureID, apparatusID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/apparatuses/${apparatusID}`)(params),
    getExposureFires: (exposureID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/fire`)(params),
    getAllExposuresFires: erApiGetV2WithParams('/V2/exposures/fire'),
    getAllExposuresCrewMembers: erApiGetV2WithParams('/V2/exposures/crewmembers'),
    getExposureCrewMembers: (exposureID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/crewmembers`)(params),
    getExposurePatients: (exposureID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/patients`)(params),
    getExposurePatient: (exposureID, patientID, params) => erApiGetV2WithParams(`/V2/exposures/${exposureID}/patients/${patientID}`)(params),
};

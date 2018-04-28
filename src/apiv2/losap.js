import apiutil from '../apiutil';

/**
 * APIv2 Losap
 * @module apiv2/losap
 **/
export default {
  getLosapMaxPoints : apiutil.erApiGetV2WithParams("/V2/losap/maxpoints"),
  getLosapMaxPoint : (maxPointID, params) => apiutil.erApiGetV2WithParams(`/V2/losap/maxpoints/${maxPointID}`)(params),
  getLosapPersonnelCategories : apiutil.erApiGetV2WithParams("/V2/losap/personnelcategories"),
  getLosapPersonnelCategory : (categoryID, params) => apiutil.erApiGetV2WithParams(`/V2/losap/personnelcategories/${categoryID}`)(params),
  getLosapIncidentPercentageRanges : apiutil.erApiGetV2WithParams("/V2/losap/incidentpercentageranges"),
  getLosapIncidentPercentages : apiutil.erApiGetV2WithParams("/V2/losap/incidentpercentages"),
  getLosapIncidentPercentage : (incidentPercentageID, params) => apiutil.erApiGetV2WithParams(`/V2/losap/incidentpercentages/${incidentPercentageID}`)(params),
  getLosapIncidentFlatPercentages : apiutil.erApiGetV2WithParams("/V2/losap/incidentflatpercentages"),
  getLosapIncidentFlatPercentage : (flatPercentageID, params) => apiutil.erApiGetV2WithParams(`/V2/losap/incidentflatpercentages/${flatPercentageID}`)(params),
  getLosapSettings : apiutil.erApiGetV2WithParams("/V2/losap/settings"),
  getLosapSetting : (settingID, params) => apiutil.erApiGetV2WithParams(`/V2/losap/settings/${settingID}`)(params)
};

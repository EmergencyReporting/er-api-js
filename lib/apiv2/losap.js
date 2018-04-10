const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Losap
 * @module apiv2/losap
 **/

module.exports = {
  getLosapMaxPoints: erApiGetV2WithParams("/V2/losap/maxpoints"),
  getLosapMaxPoint: (maxPointID, params) =>
    erApiGetV2WithParams(`/V2/losap/maxpoints/${maxPointID}`)(params),
  getLosapPersonnelCategories: erApiGetV2WithParams(
    "/V2/losap/personnelcategories"
  ),
  getLosapPersonnelCategory: (categoryID, params) =>
    erApiGetV2WithParams(`/V2/losap/personnelcategories/${categoryID}`)(params),
  getLosapIncidentPercentageRanges: erApiGetV2WithParams(
    "/V2/losap/incidentpercentageranges"
  ),
  getLosapIncidentPercentages: erApiGetV2WithParams(
    "/V2/losap/incidentpercentages"
  ),
  getLosapIncidentPercentage: (incidentPercentageID, params) =>
    erApiGetV2WithParams(
      `/V2/losap/incidentpercentages/${incidentPercentageID}`
    )(params),
  getLosapIncidentFlatPercentages: erApiGetV2WithParams(
    "/V2/losap/incidentflatpercentages"
  ),
  getLosapIncidentFlatPercentage: (flatPercentageID, params) =>
    erApiGetV2WithParams(
      `/V2/losap/incidentflatpercentages/${flatPercentageID}`
    )(params),
  getLosapSettings: erApiGetV2WithParams("/V2/losap/settings"),
  getLosapSetting: (settingID, params) =>
    erApiGetV2WithParams(`/V2/losap/settings/${settingID}`)(params)
};

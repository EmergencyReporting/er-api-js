const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getLosapMaxPoints: erApiGetFunctionWithParams('/V2/losap/maxpoints'),
    getLosapMaxPoint: (maxPointID, params) => (erApiGetFunctionWithParams(`/V2/losap/maxpoints/${maxPointID}`)(params)),
    getLosapPersonnelCategories: erApiGetFunctionWithParams('/V2/losap/personnelcategories'),
    getLosapPersonnelCategory: (categoryID, params) => (erApiGetFunctionWithParams(`/V2/losap/personnelcategories/${categoryID}`)(params)),
    getLosapIncidentPercentageRanges: erApiGetFunctionWithParams('/V2/losap/incidentpercentageranges'),
    getLosapIncidentPercentages: erApiGetFunctionWithParams('/V2/losap/incidentpercentages'),
    getLosapIncidentPercentage: (incidentPercentageID, params) => (erApiGetFunctionWithParams(`/V2/losap/incidentpercentages/${incidentPercentageID}`)(params)),
    getLosapIncidentFlatPercentages: erApiGetFunctionWithParams('/V2/losap/incidentflatpercentages'),
    getLosapIncidentFlatPercentage: (flatPercentageID, params) => (erApiGetFunctionWithParams(`/V2/losap/incidentflatpercentages/${flatPercentageID}`)(params)),
    getLosapSettings: erApiGetFunctionWithParams('/V2/losap/settings'),
    getLosapSetting: (settingID, params) => (erApiGetFunctionWithParams(`/V2/losap/settings/${settingID}`)(params))
};

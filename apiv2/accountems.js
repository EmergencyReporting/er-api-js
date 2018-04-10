const { erApiGetV2WithParams } = require("../apiutil");

/**
 * APIv2 Account EMs
 * @module apiv2/accountems
 **/

module.exports = {
  getAccountEms: erApiGetV2WithParams("/V2/accounts/ems"),
  getAccountEm: (emsID, params) =>
    erApiGetV2WithParams(`/V2/accounts/ems/${emsID}`)(params)
};

import apiutil from '../apiutil';

/**
 * APIv2 Account EMs
 * @module apiv2/accountems
 **/

export default {
  getAccountEms : apiutil.erApiGetV2WithParams("/V2/accounts/ems"),
  getAccountEm : (emsID, params) => apiutil.erApiGetV2WithParams(`/V2/accounts/ems/${emsID}`)(params)
};

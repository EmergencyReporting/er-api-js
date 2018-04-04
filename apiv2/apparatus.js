const {erApiGetFunctionWithParams} = require('../apiutil');

module.exports = {
    getAllApparatus: erApiGetFunctionWithParams('/V2/apparatus'),
    getApparatus: (departmentApparatusID, params) => (erApiGetFunctionWithParams(`/V2/apparatus/${departmentApparatusID}`)(params)),
    getAllApparatusCompartments: erApiGetFunctionWithParams('/V2/apparatus/compartments'),
    getApparatusCompartment: (compartmentID, params) => (erApiGetFunctionWithParams(`/V2/apparatus/compartments/${compartmentID}`)(params)),
    getAllApparatusCrews: erApiGetFunctionWithParams('/V2/apparatus/crews'),
    getApparatusCrews: (departmentApparatusID, params) => (erApiGetFunctionWithParams(`/V2/apparatus/${departmentApparatusID}/crews`)(params)),
    getApparatusCrew: (departmentApparatusID, crewID, params) => (erApiGetFunctionWithParams(`/V2/apparatus/${departmentApparatusID}/crews/${crewID}`)(params)),
    getAllApparatusMaintenances: erApiGetFunctionWithParams('/V2/apparatus/maintenance'),
    getApparatusMaintenances: (departmentApparatusID, params) => (erApiGetFunctionWithParams(`/V2/apparatus/${departmentApparatusID}/maintenance`)(params)),
    getApparatusMaintenance: (departmentApparatusID, maintenanceID, params) => (erApiGetFunctionWithParams(`/V2/apparatus/${departmentApparatusID}/maintenance/${maintenanceID}`)(params))
};

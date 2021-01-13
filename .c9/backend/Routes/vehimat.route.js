const vehimats = require('express').Router();
const contvehimat = require ('../Controllers/vehimat.controller.js');

vehimats.get('/vehimats/', contvehimat.read);
vehimats.get('/vehimats/:regist', contvehimat.readRegist);
vehimats.post('/vehimats/', contvehimat.save);
vehimats.delete('/vehimats/:id_material', contvehimat.deleteMaterial);

module.exports = vehimats;
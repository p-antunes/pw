const materials = require ('express').Router();
const contmat = require('../Controllers/material.controller.js');

materials.get('/materials/', contmat.read);
materials.get('/materials/:id_material', contmat.readTypeMat);
materials.post('/materials/', contmat.save);
materials.put('/materials/:id_material', contmat.updateID);
materials.put('/materials/type/:id_material', contmat.updateMatType);
materials.put('/materials/avail/:id_material', contmat.updateAvail);
materials.put('/materials/admin/:id_material', contmat.updateIDAdmin);
materials.delete('/materials/:id_material', contmat.deleteID);

module.exports = materials;
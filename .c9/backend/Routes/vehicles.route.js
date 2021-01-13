const vehicles = require('express').Router();
const contvehi = require ('../Controllers/vehicle.controller.js');

vehicles.get('/vehicles', contvehi.read);
vehicles.get('/vehicles/:regist', contvehi.readID);
vehicles.post('/vehicles/', contvehi.save);
vehicles.put('/vehicles/:regist', contvehi.updateRegist);
vehicles.put('/vehicles/cap/:regist', contvehi.updateCapacity);
vehicles.put('/vehicles/fuel/:regist', contvehi.updateFuelAverage);
vehicles.put('/vehicles/brand/:regist', contvehi.updateBrand);
vehicles.put('/vehicles/model/:regist', contvehi.updateModel);
vehicles.put('/vehicles/fuel/:regist', contvehi.updateFuelType);
vehicles.delete('/vehicles/:regist', contvehi.deleteID);

module.exports = vehicles;
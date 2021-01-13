const managers = require ('express').Router();
const contmanager = require ('../Controllers/manager.controller.js');

managers.get('/managers/', contmanager.read);
managers.get('/managers/id_manager', contmanager.readID);
managers.post('/managers', contmanager.save);
managers.delete('/managers/id_manager', contmanager.delete);

module.exports = managers;
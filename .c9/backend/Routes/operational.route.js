const operationals = require ('express').Router();
const contoper = require('../Controllers/operational.controller.js');

operationals.get('/oper', contoper.read);
operationals.get('/oper/id_operational', contoper.readID);
operationals.post('/oper', contoper.save);
operationals.delete('/oper/id_operational', contoper.deleteID);

module.exports = operationals;
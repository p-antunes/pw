const occuroper = require ('express').Router();
const contoccuroper = require('../Controllers/occuroper.controller.js');

occuroper.get('/occuroper/', contoccuroper.read);
occuroper.get('/occuroper/', contoccuroper.readID);
occuroper.post('/occuroper/', contoccuroper.save);
occuroper.delete('/occuroper/:id_operational/:id_occurrence', contoccuroper.deleteID);

module.exports = occuroper;
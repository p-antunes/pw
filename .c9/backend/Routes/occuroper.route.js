const occuroper = require ('express').Router();
const contoccuroper = require('../Controllers/occuroper.controller.js');

occuroper.get('/occuroper/', contoccuroper.read);
occuroper.get('/occuroper/', contoccuroper.readID);
occuroper.post('/occuroper/', contoccuroper.save);

module.exports = occuroper;
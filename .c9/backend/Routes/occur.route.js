const occurs = require ('express').Router();
const contoccur = require('../Controllers/occur.controller.js');

occurs.get('/occurs/', contoccur.read);
occurs.get('/occurs/:id_occurrence', contoccur.readID);
occurs.post('/occurs/', contoccur.save);
occurs.put('/occurs/', contoccur.updateID);
occurs.put('/occurs/', contoccur.updateLocal);
occurs.put('/occurs/', contoccur.updateDistance);
occurs.put('/occurs', contoccur.updateOccurrencetype);
occurs.put('/occurs/', contoccur.updateStatus);
occurs.put('/occurs/', contoccur.updateAccessCode);
occurs.put('/occurs/', contoccur.updateArrival);
occurs.put('/occurs/', contoccur.updateDeparture);
occurs.put('/occurs/', contoccur.updateCost);
occurs.put('/occurs/', contoccur.updateOrigin);
occurs.put('/occurs/', contoccur.updateDescription);
occurs.put('/occurs/', contoccur.updateIDEntity);
occurs.put('/occurs/', contoccur.updateIDRequest);
occurs.delete('/occurs/', contoccur.deleteID);

module.exports = occurs;
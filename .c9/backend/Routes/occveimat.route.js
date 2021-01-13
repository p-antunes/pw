const occurvehimats = require ('express').Router();
const contoccurvehimat = require('../Controllers/occurvehimat.controller.js');

occurvehimats.get('/occurvehimat/', contoccurvehimat.read);
occurvehimats.get('/occurvehimats/:id_occurrence', contoccurvehimat.readID);
occurvehimats.post('/occurvehimat/', contoccurvehimat.save);
occurvehimats.put('/occurvehimat/:', contoccurvehimat.updateID);
occurvehimats.put('/occurvehimat/type/:', contoccurvehimat.updateIDveimat);
occurvehimats.put('/occurvehimat/avail/:', contoccurvehimat.updateUtilization);
occurvehimats.put('/occurvehimat/admin/:', contoccurvehimat.updateConfirmation);
occurvehimats.delete('/occurvehimat/:', contoccurvehimat.deleteID);

module.exports = occurvehimats;
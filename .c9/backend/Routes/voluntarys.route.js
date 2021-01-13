const voluntarys = require('express').Router();
const contvoluntary = require ('../Controllers/voluntary.controller.js');

voluntarys.get('/voluntarys', contvoluntary.read);
voluntarys.get('/voluntarys/:id_volunt', contvoluntary.readID);
voluntarys.post('/voluntarys/', contvoluntary.save);
voluntarys.put('/voluntarys/:id_volunt', contvoluntary.updateIDVolunt);
voluntarys.put('/voluntarys/name/:id_volunt', contvoluntary.updateNameVolunt);
voluntarys.put('/voluntarys/date/:id_volunt', contvoluntary.updateDateBirth);
voluntarys.put('/voluntarys/age/:id_volunt', contvoluntary.updateAge);
voluntarys.put('/voluntarys/natio/:id_volunt', contvoluntary.updateNationality);
voluntarys.put('/voluntarys/cc/:id_volunt', contvoluntary.updateCC);
voluntarys.put('/voluntarys/phoneNr/:id_volunt', contvoluntary.updatePhoneNr);
voluntarys.put('/voluntarys/adress/:id_volunt', contvoluntary.updateAdress);
voluntarys.put('/voluntarys/education/:id_volunt', contvoluntary.updateEducation);
voluntarys.put('/voluntarys/approval/:id_volunt', contvoluntary.updateApproval);
voluntarys.delete('/voluntarys/:id_volunt', contvoluntary.deleteID);

module.exports = voluntarys;
const admins =require ('express').Router();
const contadmin = require ('../Controllers/administrator.controller.js');

admins.get('/admins', contadmin.read);
admins.get('/admins/:id_admin', contadmin.readID);
admins.post('/admins', contadmin.save);
admins.put('/admins/name', contadmin.updateName);
admins.put('/admins/age', contadmin.updateAge);
admins.put('/admins/nationality', contadmin.updateNationality);
admins.put('/admins/cc', contadmin.updateCC);
admins.put('/admins/datebirth', contadmin.updateDateBirth);
admins.put('/admins/phonenr', contadmin.updatePhoneNr);
admins.put('/admins/adress', contadmin.updateAddress);
admins.put('/admins/idlogin', contadmin.updateIDlogin);
admins.delete('/admins/:id_admin', contadmin.deleteID);

module.exports = admins;

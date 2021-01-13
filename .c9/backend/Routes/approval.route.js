const approvals = require ('express').Router();
const contappr = require ('../Controllers/approval.controller.js');

approvals.get('/approvals/', contappr.read);
approvals.get('/approvals/:id_request', contappr.readRt);
approvals.post('/approvals/:adress/:content/:phone_number', contappr.newOccur);
//approvals.put('/approvals/:verification', contappr.updateVerif);
approvals.put('/approvals/verification/:id_request', contappr.updateVerif);

module.exports = approvals;
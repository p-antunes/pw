const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSanitizer = require('express-sanitizer');
const routeMaterials = require('./Routes/materials.route.js');
const routeVehicles = require('./Routes/vehicles.route.js');
const routeVoluntarys = require('./Routes/voluntarys.route.js');
const routeApprovals = require('./Routes/approval.route.js');
const routeVehiMats = require('./Routes/vehimat.route.js');
const routeOccur = require('./Routes/occur.route.js');
const routeOpertional = require('./Routes/operational.route.js');
const routeManager = require('./Routes/manager.route.js');
const routeAdmin = require('./Routes/administrator.route.js');
const routeOccOper = require('./Routes/occuroper.route.js');
const routeOccVeiMat = require('./Routes/occveimat.route.js');

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSanitizer());
app.use('/', routeMaterials);
app.use('/', routeVehicles);
app.use('/', routeVoluntarys);
app.use('/', routeApprovals);
app.use('/', routeVehiMats);
app.use('/', routeOccur);
app.use('/', routeOpertional);
app.use('/', routeManager);
app.use('/', routeAdmin);
app.use('/', routeOccOper);
app.use('/', routeOccVeiMat);

app.use(express.static("../../Frontend/"));

app.get('/', function(req,res){
    res.send("hello");
});

app.listen(port, function () {
console.log('Example app listening on port '+ port );
});

module.exports = app;
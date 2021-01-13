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

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSanitizer());
app.use('/', routeMaterials);
app.use('/', routeVehicles);
app.use('/', routeVoluntarys);
app.use('/', routeApprovals);
app.use('/', routeVehiMats);
app.use(express.static("../../Frontend/"));

app.listen(port, function () {
console.log('Example app listening on port '+ port );
});

module.exports = app;
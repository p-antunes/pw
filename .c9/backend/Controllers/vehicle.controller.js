const connection = require ('../Config/connectMySql');



function read (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM vehicle', function (err,
    rows, fields) {
    if (!err) {
    /*verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso
    contrário envia os resultados (rows).*/
    if (rows.length == 0) {
    res.status(404).send("Data not found");
    } else {
    res.status(200).send(rows);
    }
    } else
    console.log('Error while performing Query.', err);
    });
    }


function readID (req, res) {
        const regist = req.params.regist;
        connection.con.query('SELECT * FROM vehicle WHERE regist = ? ', [regist], function (err, rows, fields) {
        if (!err) {
        
        if (rows.length == 0) {
        res.status(404).send({
        "msg": "data not found"
        });
        } else {
        res.status(200).send(rows);
        }
        } else
        res.status(400).send({
        "msg": err.code
        });
        console.log('Error while performing Query.', err);
        });
        }


         //função de gravação que recebe os 3 parâmetros
function save (req, res) {
    //receber os dados do formuário que são enviados por post
    const regist = req.body.regist;
    const capacity = req.body.capacity;
    const fuelaverage = req.body.fuel_average;
    const brand = req.body.brand;
    const model = req.body.model;
    const fuel_type = req.body.fuel_type;
    
    let query = "";
    query = connection.con.query('INSERT INTO vehicle (regist, capacity, fuel_average, brand, model, fuel_type) VALUES (?, ?, ?, ?, ?, ?) ', [ regist, capacity, fuelaverage, brand,  model, fuel_type], function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({
            "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
    } 
    else {
        if (err.code == "ER_DUP_ENTRY") {
            res.status(409).send({"msg": err.code});
            console.log('Error while performing Query.', err);
        } 
        else res.status(400).send({"msg": err.code});
        }
    });   
}

//efetuar updade de todos os dados para um determinado iduser
function updateRegist (req, res) {
    //receber os dados do formuário que são enviados por post
    const regist = req.body.regist;
    let query = "";
    query = connection.con.query('UPDATE material SET id_material = ? WHERE regist=?', [regist, regist], function (err, rows,
    fields) {
    console.log(query.sql);
    if (!err) {
    console.log("Number of records updated: " + rows.affectedRows);
    res.status(200).send({"msg": "update with success"});
    } else {
    res.status(400).send({"msg": err.code});
    console.log('Error while performing Query.', err);
    }
    });
}

//efetuar updade de todos os dados para um determinado iduser
function updateCapacity (req, res) {
    //receber os dados do formuário que são enviados por post
    const regist = req.body.regist;
    const capacity = req.body.capacity;
    let query = "";
    query = connection.con.query('UPDATE vehicle SET capacity = ? where regist = ?', [capacity, regist], function (err, rows,
    fields) {
    console.log(query.sql);
    if (!err) {
    console.log("Number of records updated: " + rows.affectedRows);
    res.status(200).send({"msg": "update with success"});
    } else {
    res.status(400).send({"msg": err.code});
    console.log('Error while performing Query.', err);
    }
    });
    }
    
    //efetuar updade de todos os dados para um determinado iduser
function updateFuelAverage(req, res) {
    //receber os dados do formuário que são enviados por post
    const regist = req.body.regist;
    const fuelaverage = req.body.fuel_average;
    let query = "";
    query = connection.con.query('UPDATE vehicle SET fuel_average = ? where regist = ?', [fuelaverage , regist], function (err, rows,
    fields) {
    console.log(query.sql);
    if (!err) {
    console.log("Number of records updated: " + rows.affectedRows);
    res.status(200).send({"msg": "update with success"});
    } else {
    res.status(400).send({"msg": err.code});
    console.log('Error while performing Query.', err);
    }
    });
    }
    
function updateFuelType(req, res) {
    //receber os dados do formuário que são enviados por post
    const regist = req.body.regist;
    const fuel_type = req.body.fuel_type;
    let query = "";
    query = connection.con.query('UPDATE vehicle SET fuel_type = ? where regist = ?', [fuel_type , regist], function (err, rows,
    fields) {
    console.log(query.sql);
    if (!err) {
    console.log("Number of records updated: " + rows.affectedRows);
    res.status(200).send({"msg": "update with success"});
    } else {
    res.status(400).send({"msg": err.code});
    console.log('Error while performing Query.', err);
    }
    });
    }
    
    //efetuar updade de todos os dados para um determinado iduser
function updateBrand(req, res) {
    //receber os dados do formuário que são enviados por post
    const regist = req.body.regist;
    const brand = req.body.brand;
    let query = "";
    query = connection.con.query('UPDATE vehicle SET brand = ? where regist = ?', [brand, regist], function (err, rows,
    fields) {
    console.log(query.sql);
    if (!err) {
    console.log("Number of records updated: " + rows.affectedRows);
    res.status(200).send({"msg": "update with success"});
    } else {
    res.status(400).send({"msg": err.code});
    console.log('Error while performing Query.', err);
    }
    });
    }
    
    function updateModel(req, res) {
    //receber os dados do formuário que são enviados por post
    const regist = req.body.regist;
    const model = req.body.model;
    let query = "";
    query = connection.con.query('UPDATE vehicle SET model = ? where regist = ?', [model, regist], function (err, rows,
    fields) {
    console.log(query.sql);
    if (!err) {
    console.log("Number of records updated: " + rows.affectedRows);
    res.status(200).send({"msg": "update with success"});
    } else {
    res.status(400).send({"msg": err.code});
    console.log('Error while performing Query.', err);
    }
    });
    }


    //função que apaga todos os dados de um vei
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const idvei = req.params.regist;
    connection.con.query('DELETE from vehicle where regist = ?', [idvei], function (err, rows, fields) {
    
    if (!err) {
    /*verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso contrário
    envia os resultados (rows).*/
    if (rows.length == 0) {
    res.status(404).send({
    "msg": "data not found"
    });
    } else {
    res.status(200).send({
    "msg": "success"
    });
    }
    } else
    console.log('Error while performing Query.', err);
    });
    }
    
    
    module.exports = {
        read: read,
        readID: readID,
        save: save,
        updateRegist: updateRegist,
        updateCapacity:updateCapacity,
        updateFuelAverage: updateFuelAverage,
        updateFuelType: updateFuelType,
        updateBrand: updateBrand,
        updateModel,
        deleteID: deleteID
    };
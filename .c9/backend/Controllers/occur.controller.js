const connection = require ('../Config/connectMySql');



function read  (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM occur', function (err,
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
        const idoccurrence = req.params.id_occurrence;
        connection.con.query('SELECT * FROM occur WHERE id_occurrence = ? ', [idoccurrence], function (err, rows, fields) {
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
    const idoccurrence = req.body.id_occurrence; 
    const local = req.body.local;
    const distance = req.body.distance;
    const occurrencetype = req.body.occurrence_type;
    const status = req.body.status;
    const accesscode = req.body.access_code;
    const arrival = req.body.arrival;
    const departure = req.body.departure;
    const cost = req.body.cost;
    const origin = req.body.origin;
    const description = req.body.description;
    const identity = req.body.id_entity;
    const idrequest = req.body.id_request;
    let query = "";
    query = connection.con.query('INSERT INTO occur (id_occurrence, local, distance, occurrence_type, status, access_code, arrival, departure, cost, origin, description, id_entity, id_request) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ', [ idoccurrence, local, distance, occurrencetype, status, accesscode, arrival, departure, cost, origin, description, identity, idrequest], function (err, rows, fields) {
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
function updateID (req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    let query = "";
    query = connection.con.query('UPDATE occur SET id_occurrence = ? WHERE id_occurrence = ?', [idoccurrence, idoccurrence], function (err, rows,
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
function updateLocal(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const local = req.body.local;
    let query = "";
    query = connection.con.query('UPDATE occur SET local = ? where id_occurrence = ?', [local, idoccurrence], function (err, rows,
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
function updateDistance(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const distance = req.body.distance;
    let query = "";
    query = connection.con.query('UPDATE occur SET distance = ? where id_occurrence = ?', [distance, idoccurrence], function (err, rows,
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
function updateOccurrencetype(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const occurrencetype = req.body.occurrence_type;
    let query = "";
    query = connection.con.query('UPDATE occur SET occurrence_type = ? where id_occurrence = ?', [occurrencetype, idoccurrence], function (err, rows,
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
function updateStatus(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const status = req.body.status;
    let query = "";
    query = connection.con.query('UPDATE occur SET status = ? where id_occurrence = ?', [status, idoccurrence], function (err, rows,
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
function updateAccessCode(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const accesscode = req.body.access_code;
    let query = "";
    query = connection.con.query('UPDATE occur SET access_code = ? where id_occurrence = ?', [accesscode, idoccurrence], function (err, rows,
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
function updateArrival(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const arrival = req.body.arrival;
    let query = "";
    query = connection.con.query('UPDATE occur SET arrival = ? where id_occurrence = ?', [arrival, idoccurrence], function (err, rows,
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
function updateDeparture(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const departure = req.body.departure;
    let query = "";
    query = connection.con.query('UPDATE occur SET departure = ? where id_occurrence = ?', [departure, idoccurrence], function (err, rows,
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
function updateCost(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const cost = req.body.cost;
    let query = "";
    query = connection.con.query('UPDATE occur SET cost = ? where id_occurrence = ?', [cost, idoccurrence], function (err, rows,
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
function updateOrigin(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const origin = req.body.origin;
    let query = "";
    query = connection.con.query('UPDATE occur SET origin = ? where id_occurrence = ?', [origin, idoccurrence], function (err, rows,
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
function updateDescription(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const description = req.body.description;
    let query = "";
    query = connection.con.query('UPDATE occur SET description = ? where id_occurrence = ?', [description, idoccurrence], function (err, rows,
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
function updateIDEntity(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const identity = req.body.id_entity;
    let query = "";
    query = connection.con.query('UPDATE occur SET id_entity = ? where id_occurrence = ?', [identity, idoccurrence], function (err, rows,
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
function updateIDRequest(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const idrequest = req.body.id_request;
    let query = "";
    query = connection.con.query('UPDATE occur SET id_request = ? where id_occurrence = ?', [idrequest, idoccurrence], function (err, rows,
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
    
    //função que apaga todos os dados de um mat
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const idoccurrence = req.body.id_occurrence;
    connection.con.query('DELETE from occur where id_occurrence = ?', [idoccurrence], function (err, rows, fields) {
    
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
        updateID: updateID,
        updateLocal: updateLocal,
        updateDistance: updateDistance,
        updateOccurrencetype: updateOccurrencetype,
        updateStatus: updateStatus,
        updateAccessCode: updateAccessCode,
        updateArrival: updateArrival,
        updateDeparture: updateDeparture,
        updateCost: updateCost,
        updateOrigin: updateOrigin,
        updateDescription: updateDescription,
        updateIDEntity: updateIDEntity,
        updateIDRequest: updateIDRequest,
        deleteID: deleteID
    };
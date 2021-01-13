const connection = require ('../Config/connectMySql');



function read (req, res) {
    //criar e executar a query de leitura na BD
    connection.query('SELECT * FROM occurvehimat', function (err,
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
        connection.con.query('SELECT * FROM occurvehimat WHERE id_occurrence = ? ', [idoccurrence], function (err, rows, fields) {
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
    const idveimat = req.body.id_vei_mat;
    const utilization = req.body.utilization;
    const confirmation = req.body.confirmation;
    let query = "";
    query = connection.con.query('INSERT INTO occurvehimat (id_occurrence, id_vei_mat, utilization, confirmation) VALUES (?, ?, ?, ?) ', [ idoccurrence, idveimat, utilization, confirmation], function (err, rows, fields) {
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
    query = connection.con.query('UPDATE occurvehimat SET id_occurrence = ? WHERE id_occurrence = ?', [idoccurrence, idoccurrence], function (err, rows,
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
function updateIDveimat (req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const idveimat = req.body.id_vei_mat;
    let query = "";
    query = connection.con.query('UPDATE occurvehimat SET id_vei_mat = ? where id_occurrence = ?', [idveimat, idoccurrence], function (err, rows,
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
function updateUtilization(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const utilization = req.body.utilization;
    let query = "";
    query = connection.con.query('UPDATE occurvehimat SET utilization = ? where id_occurrence=?', [utilization, idoccurrence], function (err, rows,
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
function updateConfirmation(req, res) {
    //receber os dados do formuário que são enviados por post
    const idoccurrence = req.body.id_occurrence;
    const confirmation = req.body.confirmation;
    let query = "";
    query = connection.con.query('UPDATE occurvehimat SET confirmation = ? where id_occurrence = ?', [confirmation, idoccurrence], function (err, rows,
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
    connection.con.query('DELETE from occurvehimat where id_occurrence = ?', [idoccurrence], function (err, rows, fields) {
    
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
        updateIDveimat: updateIDveimat,
        updateUtilization: updateUtilization,
        updateConfirmation: updateConfirmation,
        deleteID: deleteID
    };

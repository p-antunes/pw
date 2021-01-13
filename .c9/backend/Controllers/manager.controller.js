const connection = require ('../Config/connectMySql');


 function read (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM manager', function (err,
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
        const idmanager = req.params.id_manager;
        connection.con.query('SELECT * FROM manager WHERE id_manager = ? ', [idmanager], function (err, rows, fields) {
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
    const idmanager = req.body.id_manager;
    const name = req.body.name;
     const age = req.body.age;
    const nationality = req.body.nationality;
    const cc = req.body.cc;
    const datebirth = req.body.date_birth;
    const phonenr = req.body.phone_nr;
    const adress = req.body.adress;
    const idlogin = req.body.id_login;
    let query = "";
    query = connection.con.query('INSERT INTO manager (id_manager, name, age, nationality, cc, date_birth, phone_nr, adress, id_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ', [ idmanager, name, age, nationality, cc, datebirth, phonenr, adress, idlogin], function (err, rows, fields) {
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
    const idmanager = req.body.id_manager;
    let query = "";
    query = connection.con.query('UPDATE manager SET id_manager = ? WHERE id_manager = ?', [idmanager, idmanager], function (err, rows,
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
function updateName (req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const name = req.body.name;
    let query = "";
    query = connection.con.query('UPDATE manager SET name = ? where id_manager = ?', [name, idmanager], function (err, rows,
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
function updateAge(req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const age = req.body.age;
    let query = "";
    query = connection.con.query('UPDATE manager SET age = ? where id_manager = ?', [age, idmanager], function (err, rows,
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
function updateNationality(req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const nationality = req.body.nationality;
    let query = "";
    query = connection.con.query('UPDATE manager SET nationality = ? where id_manager = ?', [nationality, idmanager], function (err, rows,
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
function updateCC(req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const cc = req.body.cc;
    let query = "";
    query = connection.con.query('UPDATE manager SET cc = ? where id_manager = ?', [cc, idmanager], function (err, rows,
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
function updateDateBirth(req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const datebirth = req.body.date_birth;
    let query = "";
    query = connection.con.query('UPDATE manager SET date_birth = ? where id_manager = ?', [datebirth, idmanager], function (err, rows,
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
function updatePhoneNr(req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const phonenr = req.body.phone_nr;
    let query = "";
    query = connection.con.query('UPDATE manager SET phone_nr = ? where id_manager = ?', [phonenr, idmanager], function (err, rows,
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
function updateAdress(req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const adress = req.body.adress;
    let query = "";
    query = connection.con.query('UPDATE manager SET adress = ? where id_manager = ?', [adress, idmanager], function (err, rows,
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
function updateIDlogin(req, res) {
    //receber os dados do formuário que são enviados por post
    const idmanager = req.body.id_manager;
    const idlogin = req.body.id_login;
    let query = "";
    query = connection.con.query('UPDATE manager SET id_login = ? where id_manager = ?', [idlogin, idmanager], function (err, rows,
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
    const idmanager = req.body.id_manager;
    connection.con.query('DELETE from manager where id_manager = ?', [idmanager], function (err, rows, fields) {
    
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
        updateName: updateName,
        updateAge: updateAge,
        updateNationality: updateNationality,
        updateCC: updateCC,
        updateDateBirth: updateDateBirth,
        updatePhoneNr:updatePhoneNr,
        updateAdress: updateAdress,
        updateIDlogin: updateIDlogin,
        deleteID: deleteID
    };
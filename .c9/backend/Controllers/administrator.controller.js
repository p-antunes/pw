const connection = require ('../Config/connectMySql');


function read (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM administrator', function (err,
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
        const idadmin = req.params.id_admin;
        connection.con.query('SELECT * FROM administrator WHERE id_admin = ? ', [idadmin], function (err, rows, fields) {
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
    const idadmin = req.body.id_admin;
    const name = req.body.name;
    const age = req.body.age;
    const nationality = req.body.nationality;
    const cc = req.body.cc;
    const datebirth = req.body.date_birth;
    const phonenr = req.body.phone_nr;
    const address = req.body.adress;
    const idlogin = req.body.id_login;
    let query = "";
    query = connection.con.query('INSERT INTO administrator (id_admin, name, age, nationality, cc, date_birth, phone_nr, address, id_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ', [ idadmin, name, age, nationality, cc, datebirth, phonenr, address, idlogin], function (err, rows, fields) {
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
    const idadmin = req.params.id_admin;
    let query = "";
    query = connection.con.query('UPDATE administrator SET id_admin = ? WHERE id_admin=?', [idadmin, idadmin], function (err, rows,
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
    const idadmin = req.params.id_admin;
    const name = req.body.name;
    let query = "";
    query = connection.con.query('UPDATE administrator SET name = ? where id_admin = ?', [name, idadmin], function (err, rows,
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
    const idadmin = req.params.id_admin;
    const age = req.body.age;
    let query = "";
    query = connection.con.query('UPDATE administrator SET age = ? where id_admin = ?', [age, idadmin], function (err, rows,
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
    const idadmin = req.body.id_admin;
    const nationality = req.body.nationality;
    let query = "";
    query = connection.con.query('UPDATE administrator SET nationality = ? where id_admin = ?', [nationality, idadmin], function (err, rows,
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
    const idadmin = req.body.id_admin;
    const cc = req.body.cc;
    let query = "";
    query = connection.con.query('UPDATE administrator SET cc = ? where id_admin = ?', [cc, idadmin], function (err, rows,
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
    const idadmin = req.body.id_admin;
    const datebirth = req.body.date_birth;
    let query = "";
    query = connection.con.query('UPDATE administrator SET date_birth = ? where id_admin = ?', [datebirth, idadmin], function (err, rows,
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
    const idadmin = req.body.id_admin;
    const phonenr = req.body.phone_nr;
    let query = "";
    query = connection.con.query('UPDATE administrator SET phone_nr = ? where id_admin = ?', [phonenr, idadmin], function (err, rows,
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
function updateAddress(req, res) {
    //receber os dados do formuário que são enviados por post
    const idadmin = req.body.id_admin;
    const address = req.body.adress;
    let query = "";
    query = connection.con.query('UPDATE administrator SET address = ? where id_admin = ?', [address, idadmin], function (err, rows,
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
    const idadmin = req.body.id_admin;
    const idlogin = req.body.id_login;
    let query = "";
    query = connection.con.query('UPDATE administrator SET id_login = ? where id_admin = ?', [idlogin, idadmin], function (err, rows,
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
    const idadmin = req.body.id_admin;
    connection.con.query('DELETE from administrator where id_admin = ?', [idadmin], function (err, rows, fields) {
    
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
        updateAddress: updateAddress,
        updateIDlogin: updateIDlogin,
        deleteID: deleteID
    };
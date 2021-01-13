const connection = require ('../Config/connectMySql');

function read  (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM login', function (err,
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
        const idlogin = req.params.id_login;
        connection.con.query('SELECT * FROM login WHERE id_login = ? ', [idlogin], function (err, rows, fields) {
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
    const idlogin = req.body.id_login;
    const email = req.body.email;
    const password = req.body.password;
    const profile = req.body.profile;
    let query = "";
    query = connection.con.query('INSERT INTO login (id_login, email, password, profile) VALUES (?, ?, ?, ?) ', [ idlogin, email, password, profile], function (err, rows, fields) {
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
    const idlogin = req.body.id_login;
    let query = "";
    query = connection.con.query('UPDATE login SET id_login = ? WHERE id_login=?', [idlogin, idlogin], function (err, rows,
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
function updateEmail (req, res) {
    //receber os dados do formuário que são enviados por post
    const idlogin = req.body.id_login;
    const email = req.body.email;
    let query = "";
    query = connection.con.query('UPDATE login SET email = ? where id_login = ?', [email, idlogin], function (err, rows,
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
function updatePassword(req, res) {
    //receber os dados do formuário que são enviados por post
    const idlogin = req.body.id_login;
    const password = req.body.password;
    let query = "";
    query = connection.con.query('UPDATE login SET password = ? where id_login=?', [password, idlogin], function (err, rows,
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
function updateIDLogin(req, res) {
    //receber os dados do formuário que são enviados por post
    const idlogin = req.body.id_login;
    const profile = req.body.profile;
    let query = "";
    query = connection.con.query('UPDATE login SET profile = ? where id_login=?', [profile, idlogin], function (err, rows,
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
    const idlogin = req.body.id_login;
    connection.con.query('DELETE from login where id_login = ?', [idlogin], function (err, rows, fields) {
    
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
        updateEmail: updateEmail,
        updatePassword: updatePassword,
        updateIDLogin: updateIDLogin,
        deleteID: deleteID
    };

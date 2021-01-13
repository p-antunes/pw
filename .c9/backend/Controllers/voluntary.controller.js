const connection = require ('../Config/connectMySql');


function read(req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM voluntary', function(err,
        rows, fields) {
        if (!err) {
            /*verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso
            contrário envia os resultados (rows).*/
            if (rows.length == 0) {
                res.status(404).send("Data not found");
            }
            else {
                res.status(200).send(rows);
            }
        }
        else
            console.log('Error while performing Query.', err);
    });
}
    
function readID (req, res) {
        const idvolunt = req.params.id_volunt;
        connection.con.query('SELECT * FROM voluntary WHERE id_volunt = ? ', [idvolunt], function (err, rows, fields) {
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
    const idvolunt = req.body.id_volunt;
    const name = req.body.name;
    const datebirth = req.body.date_birth;
    const age = req.body.age;
    const nationality = req.body.nationality;
    const cc = req.body.cc;
    const phonenr = req.body.phone_nr;
    const adress = req.body.adress;
    const education = req.body.education;
    const approval = req.body.approval;
    const email = req.body.email;
    const c_postal = req.body.postal_code;
    
    
    let query = "";
    query = connection.con.query('INSERT INTO voluntary (id_volunt, name, date_birth, age, nationality, cc, phone_nr, email, adress, education , approval, postal_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ', [idvolunt, name, datebirth, age, nationality, cc, phonenr, email, adress, education, approval, c_postal], function (err, rows, fields) {
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
function updateIDVolunt (req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET id_volunt = ? WHERE id_volunt=?', [idvolunt, idvolunt], function (err, rows,
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
function updateNameVolunt (req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const name = req.body.name;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET name=? where id_volunt = ?', [idvolunt, name ], function (err, rows,
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
    const idvolunt = req.body.id_volunt;
    const datebirth = req.body.date_birth;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET date_birth=? where id_volunt=?', [datebirth, idvolunt], function (err, rows,
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
function updateIDAdmin(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const idadmin = req.body.id_admin;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET id_admin=? where id_volunt=?', [idadmin, idvolunt], function (err, rows,
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
    const idvolunt = req.body.id_volunt;
    const age = req.body.age;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET age=? where id_volunt=?', [age, idvolunt], function (err, rows,
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
    const idvolunt = req.body.id_volunt;
    const nationality = req.body.nationality;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET nationality=? where id_volunt=?', [nationality, idvolunt], function (err, rows,
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

function updateCC(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const cc = req.body.cc;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET cc=? where id_volunt=?', [cc, idvolunt], function (err, rows,
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
    
    function updatePhoneNr(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const phonenr = req.body.phone_nr;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET phone_nr=? where id_volunt=?', [phonenr, idvolunt], function (err, rows,
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
    
function updateAdress(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const adress = req.body.adress;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET adress=? where id_volunt=?', [adress, idvolunt], function (err, rows,
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
    
function updatePostal(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const c_postal = req.body.postal_code;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET postal_code=? where id_volunt=?', [c_postal, idvolunt], function (err, rows,
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

function updateEmail(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const email = req.body.email;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET email=? where id_volunt=?', [email, idvolunt], function (err, rows,
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
    
function updateEducation(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const education = req.body.education;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET education=? where id_volunt=?', [education, idvolunt], function (err, rows,
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
    
    function updateApproval(req, res) {
    //receber os dados do formuário que são enviados por post
    const idvolunt = req.body.id_volunt;
    const approval = req.body.approval;
    let query = "";
    query = connection.con.query('UPDATE voluntary SET approval=? where id_volunt=?', [approval, idvolunt], function (err, rows,
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


    //função que apaga todos os dados de um voluntario
function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const idvolunt = req.params.id_volunt;
    connection.con.query('DELETE from voluntary where id_volunt = ?', [idvolunt], function (err, rows, fields) {
    
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
        updateIDVolunt: updateIDVolunt,
        updateNameVolunt: updateNameVolunt,
        updateDateBirth: updateDateBirth,
        updateAge:updateAge,
        updateNationality: updateNationality,
        updateCC: updateCC,
        updatePhoneNr: updatePhoneNr,
        updateAdress: updateAdress,
        updateEducation: updateEducation,
        updateApproval: updateApproval,
        updatePostal: updatePostal,
        updateIDAdmin: updateIDAdmin,
        updateEmail: updateEmail,
        deleteID: deleteID
    };

      	
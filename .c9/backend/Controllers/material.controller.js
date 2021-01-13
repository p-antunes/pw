const connection = require ('../Config/connectMySql');
function read (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM material', function (err,
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


     
        
function readTypeMat (req, res) {
    
        const mat_type = req.params.material_type;
        
        connection.con.query('SELECT * FROM material WHERE material_type= ? ', [mat_type], function (err, rows, fields) {
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
    
    const mattype = req.body.material_type;
    
    const post = {
            
            material_type: mattype,
            
        };
    
    const query = connection.con.query('INSERT INTO material SET ?', post, function(err, rows, fields) {
            console.log(query.sql);
            if (!err) {
                res.status(200).send({"msg": "material registado com sucesso"});
            }
            else {
                console.log(err);
                if (err.code == "ER_DUP_ENTRY") {
                    res.status(400).send({"msg": err.code});
                    console.log('Error while performing Query.', err);
                }
                else {
                    res.status(400).send({"msg": err.code});
                    console.log('Error while performing Query.', err);
                }
            }
        });
}

    //efetuar updade de todos os dados para um determinado iduser
function updateID (req, res) {
    //receber os dados do formuário que são enviados por post
    const idmat = req.params.id_material;
    let query = "";
    query = connection.con.query('UPDATE material SET id_material = ? WHERE id_material=?', [idmat, idmat], function (err, rows,
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
function updateMatType (req, res) {
    //receber os dados do formuário que são enviados por post
    const idmat = req.params.id_material;
    const mattype = req.body.material_type;
    let query = "";
    query = connection.con.query('UPDATE material SET material_type = ? where id_material = ?', [mattype, idmat], function (err, rows,
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
function updateAvail (req, res) {
    //receber os dados do formuário que são enviados por post
    const idmat = req.params.id_material;
    const avail = req.body.availability;
    let query = "";
    query = connection.con.query('UPDATE material SET availability = ? where id_material=?', [avail, idmat], function (err, rows,
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
    const idmat = req.params.id_material;
    const idadmin = req.body.id_admin;
    let query = "";
    query = connection.con.query('UPDATE material SET id_admin=? where id_material=?', [idadmin, idmat], function (err, rows,
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
    const idmat = req.params.id_material;
    connection.con.query('DELETE from material where id_material = ?', [idmat], function (err, rows, fields) {
    
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
        readTypeMat: readTypeMat,
        save: save,
        updateID: updateID,
        updateMatType:updateMatType,
        updateAvail: updateAvail,
        updateIDAdmin: updateIDAdmin,
        deleteID: deleteID
    };

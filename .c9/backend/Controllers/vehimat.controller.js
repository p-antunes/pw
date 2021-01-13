const connection = require ('../Config/connectMySql');


function read (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM vehicle_material', function (err,
    rows, fields) {
    if (!err) {
    /*verifica os resultados se o número de linhas for 0 devolve dados não encontrados, caso
    contrário envia os resultados (rows).*/
    if (rows.length == 0) {
    res.status(404).send("Data not found");
    } else {
    res.status(200).send(rows);
    }
    } else{
    console.log('Error while performing Query.', err);
    }});
}
    
    
    function readRegist (req, res) {
        const regist = req.params.regist;
        connection.con.query('SELECT * FROM vehicle_material WHERE regist = ? ', [regist], function (err, rows, fields) {
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
    const idmat = req.body.id_material;
    
    let query = "";
    query = connection.con.query('INSERT INTO vehicle_material (regist, id_material) VALUES (?, ?) ', [ regist, idmat], function (err, rows, fields) {
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


    //função que apaga todos os dados de um mat
function deleteMaterial (req, res) {
    //criar e executar a query de leitura na BD
    const id_material = req.params.id_material;
    connection.con.query('DELETE from vehicle_material where id_material = ?', [id_material], function (err, rows, fields) {
    
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
        readRegist: readRegist,
        save: save,
        deleteMaterial: deleteMaterial
    };
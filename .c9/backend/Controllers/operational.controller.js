const connection = require ('../Config/connectMySql');



function read  (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM operational', function (err,
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
        const idoperational = req.params.id_operational;
        connection.con.query('SELECT * FROM operational WHERE id_operational = ? ', [idoperational], function (err, rows, fields) {
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
    
    const name = req.body.name;
     const birthdate = req.body.birth_date;
     const adress = req.body.adress;
    const entrydate = req.body.entry_date;
    const cc = req.body.cc;
    const phonenr = req.body.phone_number;
    const payperhour = req.body.pay_per_hour;
    const operationaltype = req.body.operational_type;
    const speciality = req.body.speciality;
    const idlogin = req.body.id_login;
    let query = "";
    query = connection.con.query('INSERT INTO operational ( name, birth_date, adress, entry_date, cc, phone_number, pay_per_hour,operational_type, speciality, id_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ', [ name, birthdate, adress, entrydate, cc, phonenr, payperhour, operationaltype, speciality, idlogin], function (err, rows, fields) {
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

function deleteID(req, res) {
    //criar e executar a query de leitura na BD
    const id_operational = req.body.id_operational;
    const id_occurrence = req.body.id_occurrence;
    connection.con.query('DELETE from opererational_occurrence where id_operational =? and id_occurrence = ?', [id_operational, id_occurrence], function (err, rows, fields) {
    
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
    
    module.exports= {
        read:read,
        readID:readID,
        save:save,
        deleteID:deleteID
    };
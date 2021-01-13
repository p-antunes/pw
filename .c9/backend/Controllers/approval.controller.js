const connection = require ('../Config/connectMySql');



function read  (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM request WHERE verification = "NULL"', function (err, rows, fields) {
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
    
function readRt (req, res){
//criar e executar a query de leitura na BD
    const idreq = req.params.id_request;
    connection.con.query('SELECT * FROM request_type where id_request=?', idreq, function (err, rows, fields) {
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
    
    
/*function deleteReq (req, res) {
    //receber os dados do formuário que são enviados por post
    const idreq = req.params.id_request;
    let query = "";
    query = connection.con.query('UPDATE request SET verification = "Desaprovado"  WHERE id_request=?', idreq, function (err, rows,
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
}*/

function updateVerif (req, res) {
    
    const idreq = req.params.id_request;
    const veri = req.body.verification;
    let query = "";
    query = connection.con.query('UPDATE request SET verification = ? where id_request=?', [veri, idreq], function (err, rows,
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

/*function updateVerif (req, res) {
    //receber os dados do formuário que são enviados por post
    const idreq = req.params.id_request;
    
    let query = "";
    query = connection.con.query('UPDATE request SET verification = "Aprovado" WHERE id_request=?', idreq, function (err, rows,
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
}*/

function newOccur (req, res){
    
    const adress = req.params.adress;
    const content = req.params.content;
    const phone_number = req.params.phone_number;
    
     let query = "";
    query = connection.con.query('insert into occurence(local, description, victim_number) values (?, ?, ?)', adress, content, phone_number, function (err, rows,
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
    
    module.exports = {
        read: read,
        readRt:readRt,
        //deleteReq: deleteReq,
        updateVerif: updateVerif,
        newOccur: newOccur
        
    };
    
    
    
    


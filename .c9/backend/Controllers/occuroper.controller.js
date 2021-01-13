const connection = require ('../Config/connectMySql');



 function read (req, res) {
    //criar e executar a query de leitura na BD
    connection.con.query('SELECT * FROM occuroper', function (err,
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
        const ..... = req.params......;
        connection.con.query('SELECT * FROM occuroper WHERE ..... = ? ', [.....], function (err, rows, fields) {
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
    const statute = req.body.statute; 
    const points = req.body.points;
    const arrival = req.body.arrival;
    const departure = req.body.departure;
    const presence = req.body.presence;
    const idopera = req.body.id_operational;
    const idoccurr = req.body.id_occurrence;
    const checked = req.body.checked;
    let query = "";
    query = connection.con.query('INSERT INTO occuroper (statute, points, arrival, departure, presence, id_operational, id_occurrence, checked) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ', [ statute, points, arrival, departure, presence, idopera, idoccurr, checked], function (err, rows, fields) {
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
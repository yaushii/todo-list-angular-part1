var express = require ("express");
var cors = require('cors');
var app = express();
var mysql = require('mysql');

const { response } = require("express");


function getConnection(){ 
    return mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database: "todolist"

});

};


var corsOptions = {
    origin: '*'
  };



  app.get("/",cors(corsOptions),  (req, res,next) => {

    
    
    const connection = getConnection()
    
    connection.query("SELECT * from taches", (err, rows, files) => {
        if (err) {
            console.log("Failed to query for tache:" + err)
            res.sendStatus(500)
            return
        }

        
        const users = rows.map((row) => {

            return {
                id: row.id,
                name: row.name,
                
            }
        })

        res.json(users)
        
    })
    
})


app.get("/tasks",cors(corsOptions),  (req, res,next) => {

    
    
    const connection = getConnection()
    
    connection.query("SELECT * from taches", (err, rows, files) => {
        if (err) {
            console.log("Failed to query for tache:" + err)
            res.sendStatus(500)
            return
        }

        
        const users = rows.map((row) => {

            return {
                id: row.id,
                name: row.name,
                
            }
        })

        res.json(users)
        
    })
    
})



app.get('/tasks/:id', (req, res) => {
    console.log("fetching user with id: " + req.params.id)
    const connection = getConnection()
    const tachesId = req.params.id
    const queryId = "SELECT * from taches WHERE id = ?"
    connection.query(queryId, [tachesId], (err, rows, files) => {
        if (err) {
            console.log("Failed to query for users:" + err)
            res.sendStatus(500)
            return
        }

        console.log("i think we fetched users success")
        const users = rows.map((row) => {

            return {
                id: row.id,
                name: row.name,
            }
        })

        res.json(users)
    })
   
})
app.get('/:id', (req, res) => {
    console.log("fetching user with id: " + req.params.id)
    const connection = getConnection()
    const tachesId = req.params.id
    const queryId = "SELECT * from taches WHERE id = ?"
    connection.query(queryId, [tachesId], (err, rows, files) => {
        if (err) {
            console.log("Failed to query for users:" + err)
            res.sendStatus(500)
            return
        }

        console.log("i think we fetched users success")
        const users = rows.map((row) => {

            return {
                id: row.id,
                name: row.name,
            }
        })

        res.json(users)
    })
   
})
    

app.listen(8080, () => {
    console.log("server fonctionne et ecoute au 3000...")
})
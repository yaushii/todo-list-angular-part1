var express = require ("express");
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






app.get("/", (req, res) => {
    console.log("responding to root route")
    res.send("Bonjour bienvenue sur l'api de Telmann Justine qui est conecter a une bdd phpmyadmin")
})


app.get("/taches", (req, res) => {
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
    

app.listen(3000, () => {
    console.log("server fonctionne et ecoute au 3000...")
})
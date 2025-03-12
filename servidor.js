const express = require("express");
const cors = require("cors");
const mysql = require("mysql")
const connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'estudiantesweb',
    password: 'admin12345',
    database: 'cursoweb',
    port: 3306
})
connection.connect(err=>{
    if(err) throw err;
    console.log("conectado a mysql")
})


const app = express();
app.use(cors());
app.use(express.json());

app.listen(3003, () => {console.log("El servidor esta corriendo por el puerto 3003");
});


app.post("/agregar",(req,res)=>{
    const{ asignatura, nota } = req.body;
    connection.query('INSERT INTO reyes ( nombre, fecha) VALUES(?,?)',
        [asignatura, nota], (err,result)=>{
            //if(err) throw err; 
            res.json({mensaje:"Person added"});

        });
    
});

app.put('/actualizar/:documento,fecha', (req,res)=>{ 
    const {documento} = req.params
    const{nombre, fecha} = req.body;
    console.log(asi, nota)
    connection.query('UPDATE reyes set nombre=?,fecha=?, where documento = ?',
        [nombre, fecha, documento], (err,result) =>{
            res.json({mensaje: "cambio concretado"})

        })

});


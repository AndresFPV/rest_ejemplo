import * as express from "express"

let app : express.Application = express()

interface Alumno
{
    codigo : string
    nombre : string
}

//Recurso Alumnos
// /alumnos/20142153
app.get("/alumnos/:codigo",(req,res) => {
    let alumno :Alumno = {
        codigo : "20142153",
        nombre : "Andres"
    }
    res.send(alumno)
})

app.listen(3000, () => {
    console.log("Servidor ejecutandose...")
})
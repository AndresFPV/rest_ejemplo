import * as express from "express"
import {AlumnoResource} from "./resources"

let app : express.Application = express()

let alumnoResource = new AlumnoResource()

//Recurso Alumnos
// /alumnos/20142153
app.get("/alumnos/:codigo", alumnoResource.getAlumno)
app.get("/alumnos", alumnoResource.getAlumnos)

app.listen(3000, () => {
    console.log("Servidor ejecutandose...")
})
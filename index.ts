import * as express from "express"
import {AlumnoResource, ProfesorResource} from "./resources"

let app : express.Application = express()

let alumnoResource = new AlumnoResource()
let profesorResource = new AlumnoResource()

//Recurso Alumnos
// /alumnos/20142153
app.get("/alumnos/:codigo", alumnoResource.get)
app.get("/alumnos", alumnoResource.getAll)

//Recurso Profesor
app.get("/profesor/:codigo", profesorResource.get)
app.get("/profesor", profesorResource.getAll)

app.listen(3000, () => {
    console.log("Servidor ejecutandose...")
})
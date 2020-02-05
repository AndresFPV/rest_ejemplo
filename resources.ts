interface Alumno
{
    codigo : string
    nombre : string
}

export class AlumnoResource
{
    static path : string = "/alumnos"
    
    getAlumno(req,res)
    {
        //Se va a obtener un alumno
        let codigo = req.params.codigo
        
        //Path parameter
        let alumno : Alumno = {
            codigo : "20142153",
            nombre : "Andres"
        }
        res.send(alumno)
    }

    getAlumnos(req, res)
    {
        //Se va a obtener un listado de alumnos
        //query parameter
        let carrera = req.params.carrera

        res.send([
            {
                codigo : "20156789",
                nombre : "Ignacio"
            },
            {
                codigo : "20143160",
                nombre : "Renato"
            }
        ])
    }
}
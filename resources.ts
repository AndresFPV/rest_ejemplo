interface Alumno
{
    codigo : string
    nombre : string
}

abstract class Resource
{
    abstract get(req,res)
    abstract getAll(req,res)
    abstract post(req,res)
    abstract put(req,res)
    abstract delete(req,res)
}

export class ProfesorResource extends Resource
{
    get(req: any, res: any) {
        throw new Error("Method not implemented.")
    }    getAll(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    post(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    put(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    delete(req: any, res: any) {
        throw new Error("Method not implemented.")
    }

    
}

export class AlumnoResource extends Resource
{
    static path : string = "/alumnos"

    get(req, res) {
        //Se va a obtener un alumno
        let codigo = req.params.codigo
        
        //Path parameter
        let alumno : Alumno = {
            codigo : "20142153",
            nombre : "Andres"
        }
        res.send(alumno)
    }
    getAll(req, res) {
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
    
    post(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    put(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    delete(req: any, res: any) {
        throw new Error("Method not implemented.")
    }

}
//inicializamos el servidor
import express from 'express'
import employeesRoutes from './routes/employees.js'
import indexRoutes from './routes/index.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoutes) //EL PREFIJO QUE UTILIZARA LA API

//UTILIZAMOS ESTE MIDDLEWARE PARA VALIDAR SI NO EXISTE ALGUNA RUTA VALIDA
app.use((req, res, next) => {
    res.status(404).json({
        message: 'ERROR, ruta no encontrada'
    })
})

export default app;
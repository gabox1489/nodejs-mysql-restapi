//aca creamos nuestra conexion a la base de datos
import { createPool } from 'mysql2/promise'
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from './config.js'


//obtenemos nuestros datos para la conexion de la base de datos
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE

})
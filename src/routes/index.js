import express from 'express'
import { Router } from "express";
import { pool } from '../db.js';

const app = express()
const router = Router()

//RUTA PARA HACER PING Y COMPROBAR CONEXION DE BASE DE DATOS
app.get('/ping', async(req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result') //[result para extraer algun dato]
    res.json(result)
});

export default router
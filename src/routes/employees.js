import { Router } from "express";
import { createEmployees, deleteEmployees, getEmployees, getEmployeesId, updateEmployees } from "../controllers/employees.js";

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployeesId)
router.post('/employees', createEmployees)
router.patch('/employees/:id', updateEmployees) //ACTUALIZAR PARCIALMENTE
router.delete('/employees/:id', deleteEmployees)

export default router
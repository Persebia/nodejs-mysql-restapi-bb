import { Router } from "express";
import { 
    getEmployees_bb, 
    createEmployee_bb, 
    updateEmployee_bb, 
    deleteEmployee_bb, 
    getEmployee_bb} from "../controllers/employees.controller.js"

const router_bb = Router();

// GET
// obtener empleados
router_bb.get('/employees', getEmployees_bb);

// obtener un empleado
router_bb.get('/employees/:id', getEmployee_bb);

// POST
router_bb.post('/employees', createEmployee_bb);
// PATCH (para actualizar un solo dato de un registro) / PUT (para actualizar todo el registro)
router_bb.patch('/employees/:id', updateEmployee_bb);
// DELETE
router_bb.delete('/employees/:id', deleteEmployee_bb);


export default router_bb;
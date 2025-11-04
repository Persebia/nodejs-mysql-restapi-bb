import { Router } from 'express';
import { ping_bb } from "../controllers/index.controller.js"

const router_bb = Router();

// Consulta
router_bb.get('/ping', ping_bb);

export default router_bb;
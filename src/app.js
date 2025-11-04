// index.js
'use strict';
import express from "express";
import employeesRoutes_bb from "./routes/employees.routes.js";
import indexRoutes_bb from "./routes/index.routes.js";

console.log("Hola mundo barb");

const app_bb = express();

app_bb.use(express.json());
// usar routes
app_bb.use( "/api" , employeesRoutes_bb); 
app_bb.use(indexRoutes_bb); 

app_bb.use((req_bb, res_bb, next_bb) => {
    res_bb.status(404).json({
        message: 'endpoint no encontrado'
    })
});

export default app_bb;
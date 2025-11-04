// Importar variables de entorno
// Las variables de entorno sirven para desplegar la api
import {config} from 'dotenv';

config();

// servidor
export const PORT_bb = process.env.PORT || 3000;

export const DB_USER_bb = process.env.DB_USER || 'root';
export const DB_PASSWORD_bb = process.env.DB_PASSWORD || '';
export const DB_DATABASE_bb = process.env.DB_DATABASE || 'db_company_bb';
export const DB_HOST_bb = process.env.DB_HOST || 'localhost';
// Puerto de la base de datos
export const DB_PORT_bb = process.env.DB_DATABASE || 3306;
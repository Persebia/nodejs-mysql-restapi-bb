import { createPool } from 'mysql2/promise';
import { 
    DB_HOST_bb, 
    DB_PORT_bb, 
    DB_DATABASE_bb, 
    DB_USER_bb, 
    DB_PASSWORD_bb 
} from './config.js';
    
export const pool_bb = createPool({
    host: DB_HOST_bb,
    user: DB_USER_bb,
    password: DB_PASSWORD_bb,
    port: DB_PORT_bb,
    database: DB_DATABASE_bb
});



import {pool_bb} from "../db.js";


export const ping_bb = async (req_bb, res_bb) => {
    const result_bb = 
    await pool_bb.query('SELECT 1 + 1 AS result');
    res_bb.json(result_bb);
}
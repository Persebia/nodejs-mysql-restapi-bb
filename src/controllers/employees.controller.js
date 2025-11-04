import { pool_bb } from "../db.js";

// crear empleados
export const createEmployee_bb = async (req_bb, res_bb) => {
   try {
        const {name_bb, salary_bb} = req_bb.body;
        const [rows_bb] = await pool_bb.query('INSERT INTO td_employee_bb (name_bb, salary_bb) VALUES (?, ?)', [name_bb, salary_bb]);
        res_bb.send({
                id:rows_bb.insertId,
                name_bb,
                salary_bb
        });
   } catch (error_bb) {
        return res_bb.status(500).json({ message: `Algo salio mal: ${error_bb}` });
   }
};

// obtener empleados
export const getEmployees_bb = async (req_bb, res_bb) => {
    try {
        const [rows_bb] = await pool_bb.query('SELECT * FROM td_employee_bb');
        res_bb.json(rows_bb);
    } catch (error_bb) {
        return res_bb.status(500).json({ message: `Algo salio mal: ${error_bb}` });
    }
}

// obtener un empleado
export const getEmployee_bb = async (req_bb, res_bb) => {
    try {
        const {id} = req_bb.params;
        const [rows_bb] = await pool_bb.query('SELECT * FROM td_employee_bb WHERE id_employee_bb = ?',
        [id]);

        if (rows_bb.length <= 0) return res_bb.status(404).json({
            message: 'Employee not found'
        })
        res_bb.json(rows_bb[0]);
    } catch (error_bb) {
        return res_bb.status(500).json({ message: `Algo salio mal: ${error_bb}` });
    }
}

// actualizar empleados
export const updateEmployee_bb = async (req_bb, res_bb) => {
    try {
        const { id } = req_bb.params;
        const { name_bb, salary_bb } = req_bb.body;

        const [result] = await pool_bb.query(
            'UPDATE td_employee_bb SET name_bb = IFNULL(?, name_bb), salary_bb = IFNULL(?, salary_bb) WHERE id_employee_bb = ?',
            [name_bb, salary_bb, id]
        );

        if (result.affectedRows === 0) {
            return res_bb.status(404).json({ message: 'Employee not found' });
        }

        const [rows] = await pool_bb.query('SELECT * FROM td_employee_bb WHERE id_employee_bb = ?', [id]);
        res_bb.json(rows[0]);
    } catch (error_bb) {
        return res_bb.status(500).json({ message: `Algo salio mal: ${error_bb}` });
    }
}

// eliminar empleados
export const deleteEmployee_bb = async (req_bb, res_bb) => {
    try {
        const { id } = req_bb.params;
        const [result] = await pool_bb.query('DELETE FROM td_employee_bb WHERE id_employee_bb = ?', [id]);

        if (result.affectedRows === 0) {
            return res_bb.status(404).json({ message: 'Employee not found' });
        }
        res_bb.sendStatus(204);
    } catch (error_bb) {
        return res_bb.status(500).json({ message: `Algo salio mal: ${error_bb}` });
    }
}
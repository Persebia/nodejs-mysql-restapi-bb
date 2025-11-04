import {PORT_bb} from "./config.js";
import app_bb from "./app.js";

app_bb.listen(PORT_bb);
console.log(`Servidor corriendo en el puerto ${PORT_bb}: http://localhost:3000`)


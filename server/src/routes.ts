import express from "express";

import MedicosController from "./controllers/MedicosController";
import EspecialidadesController from "./controllers/EspecialidadesController";
import PacientesController from "./controllers/PacientesController";

const routes = express.Router();
const medicosController = new MedicosController();
const especialidadesController = new EspecialidadesController();
const pacientesController = new PacientesController();

routes.get("/especialidade", especialidadesController.index);

routes.post("/medico", medicosController.create);
routes.get("/medico", medicosController.index);
//routes.get("/medico", medicosController.todos);
routes.get("/medico/:id", medicosController.show);

routes.post("/pacientes", pacientesController.create);


//index(varios), show(um apenas), create, update, delete

export default routes;
import express from "express";

import MedicosController from "./controllers/MedicosController";
import EspecialidadesController from "./controllers/EspecialidadesController";

const routes = express.Router();
const medicosController = new MedicosController();
const especialidadesController = new EspecialidadesController();

routes.get("/especialidade", especialidadesController.index);

routes.post("/medico", medicosController.create);
routes.get("/medico", medicosController.index);
routes.get("/medico/:id", medicosController.show);


//index(varios), show(um apenas), create, update, delete

export default routes;
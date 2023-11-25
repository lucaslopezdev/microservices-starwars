import { Router } from "express";
import getPlanets from "../controllers/getPlanets.js";
import getPlanetById from "../controllers/getPlanetById.js";
import createPlanet from "../controllers/createPlanet.js";
import planetValidation from "../middlewares/planetValidation.js";
import planetIdValidation from "../middlewares/planetIdValidation.js";

const router = Router()

router.get('/', getPlanets)
router.get('/:id', planetIdValidation, getPlanetById)
router.post('/', planetValidation, createPlanet)

export default router
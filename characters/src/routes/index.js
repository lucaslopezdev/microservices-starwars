import { Router } from "express";
import getCharacters from '../controllers/getCharacters.js'
import getCharacterById from "../controllers/getCharacterById.js";
import createCharacter from "../controllers/createCharacter.js";
import characterValidation from "../middlewares/characterValidation.js";
import characterIdValidation from "../middlewares/characterIdValidation.js";

const router = Router()

router.get('/', getCharacters)
router.get('/:id', characterIdValidation, getCharacterById)
router.post('/', characterValidation, createCharacter)

export default router
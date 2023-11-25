import { Router } from 'express'
import getFilms from '../controllers/getFilms.js'
import postFilm from '../controllers/postFilm.js'
import getById from '../controllers/getById.js'
import filmValidation from '../middlewares/filmValidation.js'
import filmIdValidation from '../middlewares/filmIdValidation.js'

const router = Router()

router.get('/', getFilms)
router.get('/:id', filmIdValidation, getById)
router.post('/', filmValidation, postFilm)

export default router

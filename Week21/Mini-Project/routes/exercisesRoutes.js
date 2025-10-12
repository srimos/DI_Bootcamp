import express from 'express'
import exercisesController from "../controllers/exercisesController.js";

const router = express.Router()

router.get('/', exercisesController.getAll)
router.get('/:id', exercisesController.getById)
router.post('/', exercisesController.create) 
router.put('/:id', exercisesController.update) 
router.delete('/:id', exercisesController.delete)

export default router
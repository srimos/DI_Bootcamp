import express from 'express'
import workoutsController from "../controllers/workoutsController.js";

const router = express.Router()

router.get('/', workoutsController.getAll)
router.get('/:id', workoutsController.getById)
router.post('/', workoutsController.create) 
router.put('/:id', workoutsController.update) 
router.delete('/:id', workoutsController.delete)

export default router
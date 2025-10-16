import express from 'express'
import userWorkoutsController from "../controllers/userWorkoutsController.js";

const router = express.Router()

router.get('/', userWorkoutsController.getAll)
router.get('/:userId', userWorkoutsController.getUserWorkouts)
router.post('/', userWorkoutsController.assign) 

export default router
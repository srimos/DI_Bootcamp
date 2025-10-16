import workoutsModel from "../models/workoutsModel.js";
   
const workoutsController ={
    getAll: async (req,res,next) => {
        try {
            const workouts = await workoutsModel.getAll()
            res.status(200).json(workouts);
            console.log("Data received")
        } catch (err) {
            // console.error("Error fetching workouts:", err.message);
            // res.status(500).json({ error: "Failed to fetch workouts" });
            next(err)
        }
    },

    getById: async (req,res,next) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid workout id" });
            }
            const [workout] = await workoutsModel.getById(id)
            if (!workout) {
                return res.status(404).json({ error: "Workout not found" });
            }
            res.status(200).json(workout);
            console.log("Data received")
        } catch (err) {
            // console.error("Error fetching workout:", err.message);
            // res.status(500).json({ error: "Failed to fetch workout" });
            next(err)
        }  
    },

    create: async (req,res,next) => {
        try {
            const newWorkout = await workoutsModel.create(req.body)
            res.status(201).json(newWorkout);
            console.log("New workout created")
        } catch (err) {
            // console.error("Error creating workout:", err.message);
            // res.status(500).json({ error: "Failed to create workout" });
            next(err)
        } 
    },

    update: async (req,res,next) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid workout id" });
            }
            const [updatedWorkout] = await workoutsModel.update(id,req.body)
            if (!updatedWorkout) {
                return res.status(404).json({ error: "Workout not found" });
            }
            res.status(200).json(updatedWorkout);
            console.log("Workout updated")
        } catch (err) {
            // console.error("Error updating workout:", err.message);
            // res.status(500).json({ error: "Failed to update workout" });
            next(err)
        } 
    },

    delete: async (req,res,next) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid workout id" });
            }    
            const deleted = await workoutsModel.delete(id)
            if (!deleted) {
                return res.status(404).json({ error: "Workout not found" });
            }
            res.status(200).json({message:"Workout deleted"});
            console.log("Workout deleted")
        } catch (err) {
            // console.error("Error deleting workout:", err.message);
            // res.status(500).json({ error: "Failed to delete workout" });
            next(err)
        }
    }
}

export default workoutsController
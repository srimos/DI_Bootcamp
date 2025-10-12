import exercisesModel from "../models/exercisesModel.js";
   
const exercisesController ={
    getAll: async (req,res) => {
        try {
            const exercises = await exercisesModel.getAll()
            res.status(200).json(exercises);
            console.log("Data received")
        } catch (err) {
            console.error("Error fetching exercises:", err.message);
            res.status(500).json({ error: "Failed to fetch exercises" });
        }
    },

    getById: async (req,res) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid exercise id" });
            }
            const [exercise] = await exercisesModel.getById(id)
            if (!exercise) {
                return res.status(404).json({ error: "Exercise not found" });
            }
            res.status(200).json(exercise);
            console.log("Data received")
        } catch (err) {
            console.error("Error fetching exercise:", err.message);
            res.status(500).json({ error: "Failed to fetch exercise" });
        }  
    },

    create: async (req,res) => {
        try {
            const newExercise = await exercisesModel.create(req.body)
            res.status(201).json(newExercise);
            console.log("New exercise created")
        } catch (err) {
            console.error("Error creating exercise:", err.message);
            res.status(500).json({ error: "Failed to create exercise" });
        } 
    },

    update: async (req,res) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid exercise id" });
            }
            const [updatedExercise] = await exercisesModel.update(id,req.body)
            if (!updatedExercise) {
                return res.status(404).json({ error: "Exercise not found" });
            }
            res.status(200).json(updatedExercise);
            console.log("Exercise updated")
        } catch (err) {
            console.error("Error updating exercise:", err.message);
            res.status(500).json({ error: "Failed to update exercise" });
        } 
    },

    delete: async (req,res) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid exercise id" });
            }    
            const deleted = await exercisesModel.delete(id)
            if (!deleted) {
                return res.status(404).json({ error: "Exercise not found" });
            }
            res.status(200).json({message:"Exercise deleted"});
            console.log("Exercise deleted")
        } catch (err) {
            console.error("Error deleting exercise:", err.message);
            res.status(500).json({ error: "Failed to delete exercise" });
        }
    }
}

export default exercisesController
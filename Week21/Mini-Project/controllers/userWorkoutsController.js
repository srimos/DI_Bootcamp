import userWorkoutsModel from "../models/userWorkoutsModel.js";
   
const userWorkoutsController ={
    getAll: async (req,res) => {
        try {
            const userWorkouts = await userWorkoutsModel.getAll()
            res.status(200).json(userWorkouts);
            console.log("Data received")
        } catch (err) {
            console.error("Error fetching data:", err.message);
            res.status(500).json({ error: "Failed to fetch data" });
        }
    },
    
    getUserWorkouts: async (req,res) => {
        try {
            const userId = parseInt(req.params.userId)
            if (!userId || isNaN(userId)) {
                return res.status(400).json({ error: "Invalid user id" });
            }
            const workouts = await userWorkoutsModel.getWorkoutsForUser(userId)
            if (!workouts) {
                return res.status(404).json({ error: "Workouts not found" });
            }
            res.status(200).json(workouts);
            console.log("Data received")
        } catch (err) {
            console.error("Error fetching workouts for user:", err.message);
            res.status(500).json({ error: "Failed to fetch workouts for user" });
        }  
    },

    assign: async (req,res) => {
        try {
            const {user_id,workout_id} = req.body
            if (!user_id || !workout_id) {
                return res.status(400).json({ error: "User id and workout id are required" });
            }
            const assignment = await userWorkoutsModel.assignWorkout(req.body)
            res.status(201).json(assignment);
            console.log("Workout assigned to user")
        } catch (err) {
            console.error("Error assigning workout to user:", err.message);
            res.status(500).json({ error: "Failed to assign workout to user" });
        } 
    },
}

export default userWorkoutsController
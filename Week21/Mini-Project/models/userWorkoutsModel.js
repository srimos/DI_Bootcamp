import {db} from "../config/knexconnect.js";

const userWorkoutsModel = {
    getAll:()=>
        db("user_workouts")
        .join("users", "user_workouts.user_id", "users.user_id")
        .join("workouts", "user_workouts.workout_id", "workouts.workout_id")
        .select(
            "user_workouts.*",
            "users.username",
            "workouts.workout_title"
        ),

    assignWorkout: (data) =>
        db("user_workouts")
        .insert(data)
        .returning(["user_id", "workout_id"]),

    getWorkoutsForUser: (userId) =>
        db("user_workouts")
        .join("users", "user_workouts.user_id", "users.user_id")
        .join("workouts", "user_workouts.workout_id", "workouts.workout_id")
        .select(
            "user_workouts.*",
            "users.username",
            "workouts.workout_title"
        )
        .where("user_workouts.user_id", userId),
};

export default userWorkoutsModel
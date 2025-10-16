import {db} from "../config/knexconnect.js";

const workoutsModel = {
    getAll:()=>
        db("workouts")
        .select('*'),

    getById:(id)=>
        db("workouts")
        .where({workout_id:id}),

    create:(data)=>
        db("workouts")
        .insert(data)
        .returning('*'),

    update:(id,data)=>
        db("workouts")
        .where({workout_id:id})
        .update(data)
        .returning('*'),

    delete:(id)=>
        db("workouts")
        .where({workout_id:id})
        .del()
}

export default workoutsModel
import {db} from "../config/knexconnect.js";

const exercisesModel = {
    getAll:()=>
        db("exercises")
        .select('*'),

    getById:(id)=>
        db("exercises")
        .where({exercise_id:id}),

    create:(data)=>
        db("exercises")
        .insert(data)
        .returning('*'),

    update:(id,data)=>
        db("exercises")
        .where({exercise_id:id})
        .update(data)
        .returning('*'),

    delete:(id)=>
        db("exercises")
        .where({exercise_id:id})
        .del()
}

export default exercisesModel
import {db} from "../config/knexconnect.js";

const usersModel = {
    getAll:()=>
        db("users")
        .select('*'),

    getById:(id)=>
        db("users")
        .where({user_id:id}),

    create:(data)=>
        db("users")
        .insert(data)
        .returning('*'),

    update:(id,data)=>
        db("users")
        .where({user_id:id})
        .update(data)
        .returning('*'),

    delete:(id)=>
        db("users")
        .where({user_id:id})
        .del()
}

export default usersModel
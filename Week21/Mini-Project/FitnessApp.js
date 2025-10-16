import express from "express"
const app = express()

import {db} from "./config/knexconnect.js";

import exercisesRoutes from './routes/exercisesRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import workoutsRoutes from './routes/workoutsRoutes.js'
import userWorkoutsRoutes from './routes/userWorkoutsRoutes.js'

async function testConnection() {
    try {
    await db.raw('SELECT 1+1 AS result');
    console.log('✅ Database connection successful!');
    } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
    }
}
    
await testConnection();

app.use(express.json())

app.use('/exercises', exercisesRoutes)
app.use('/users', usersRoutes)
app.use('/workouts', workoutsRoutes)
app.use('/userWorkouts', userWorkoutsRoutes)

app.get("/",(req,res)=>{
    res.json("Welcome to the Fitness App")
})

app.listen (5002,()=>{
    console.log("The server is running on port 5002")
})
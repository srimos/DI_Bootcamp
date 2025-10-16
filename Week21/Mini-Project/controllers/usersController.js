import usersModel from "../models/usersModel.js";
   
const usersController ={
    getAll: async (req,res) => {
        try {
            const users = await usersModel.getAll()
            res.status(200).json(users);
            console.log("Data received")
        } catch (err) {
            console.error("Error fetching users:", err.message);
            res.status(500).json({ error: "Failed to fetch users" });
        }
    },

    getById: async (req,res) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid user id" });
            }
            const [user] = await usersModel.getById(id)
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(user);
            console.log("Data received")
        } catch (err) {
            console.error("Error fetching user:", err.message);
            res.status(500).json({ error: "Failed to fetch user" });
        }  
    },

    create: async (req,res) => {
        try {
            const newUser = await usersModel.create(req.body)
            res.status(201).json(newUser);
            console.log("New user created")
        } catch (err) {
            console.error("Error creating user:", err.message);
            res.status(500).json({ error: "Failed to create user" });
        } 
    },

    update: async (req,res) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid user id" });
            }
            const [updatedUser] = await usersModel.update(id,req.body)
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updatedUser);
            console.log("User updated")
        } catch (err) {
            console.error("Error updating user:", err.message);
            res.status(500).json({ error: "Failed to update user" });
        } 
    },

    delete: async (req,res) => {
        try {
            const id = parseInt(req.params.id)
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: "Invalid user id" });
            }    
            const deleted = await usersModel.delete(id)
            if (!deleted) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({message:"User deleted"});
            console.log("User deleted")
        } catch (err) {
            console.error("Error deleting user:", err.message);
            res.status(500).json({ error: "Failed to delete user" });
        }
    }
}

export default usersController
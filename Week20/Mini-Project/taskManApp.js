import express from "express";
import { promises as fs } from "fs";
import {readFile,writeFile} from "fs/promises";
import {formattedDateTime} from "./dateTime.js"
import { body, param,validationResult } from "express-validator";
const app = express();
const tasks = await loadTasks();

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

app.use(express.json());

async function newTaskJson(file,content) {
    try {
        await fs.writeFile(file,JSON.stringify(content, null, 2));
        console.log("File written successfully");
        } catch (err) {
            console.error('Error writing file: ', err);
        }
}

async function loadTasks() {
  try {
    const data = await readFile("tasks.json", "utf-8");
    return data.trim() == "" ? [] : JSON.parse(data);
    } catch (err) {
        if (err.code == "ENOENT") {
            await writeFile("tasks.json", "[]");
            return [];
        }
    throw err;
  }
}

app.get('/', (req, res) => {
    res.send("Welcome to taskMan-api!")
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks)
})

app.get('/api/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => task.id == id);
    if (!task) {
    return res.status(404).send("Task not found");
    }
    res.json(task);
})

// to find the highest id in tasks
let globalId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;

app.post(
    '/api/tasks',
    [
    body("task_name")
    .trim()
    .notEmpty()
    .withMessage("'task_name' field is required")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        globalId+=1
        const newTask = {
            id: globalId,
            task_name: req.body.task_name,
            date_time_started: formattedDateTime,
            completed: false
            };
    tasks.push(newTask);
    await newTaskJson("tasks.json",tasks)
    res.status(201).json(newTask);
});

app.put(
    '/api/tasks/:id',
    [
    param("id")
    .exists().withMessage("'id' is required in URL")
    .isInt({ gt: 0 }).withMessage("'id' must be a positive integer"),
    body("completed")
    .optional()
    .isBoolean()
    .withMessage("'completed' must be true or false"),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const id = Number(req.params.id);
        const task = tasks.findIndex((task) => task.id == id);
        if (task == -1) {
            return res.status(404).send("Task not found");
        }
        const { completed } = req.body;
        if (completed != undefined) {
            tasks[task].completed = completed;
        }
        if (completed == true) {
            tasks[task].date_time_finished = formattedDateTime;
        }
        await newTaskJson("tasks.json",tasks)
        res.status(200).json("Task updated");
});

app.delete("/api/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.findIndex((task) => task.id === id);
  if (task == -1) {
    return res.status(404).send("Task not found");
  }
  tasks.splice(task, 1);
  await newTaskJson("tasks.json",tasks)
  res.status(200).json("Task deleted");
});
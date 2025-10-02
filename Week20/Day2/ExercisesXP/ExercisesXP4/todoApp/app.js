import {Todolist} from "./todo.js"

const List = new Todolist()
List.addTask("Walk the dog")
List.addTask("Finish my homework")
List.markAsComplete("Finish my homework")
List.addTask("Shower")
List.markAsComplete("Shower")
List.listAllTasks()
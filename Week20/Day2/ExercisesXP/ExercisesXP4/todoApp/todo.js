export class Todolist{
    constructor(){
        this.list = []
    }

    addTask(task){
        let taskObj = {
            "task":task,
            "status":"pending"
        }
        this.list.push(taskObj)
    }

    markAsComplete(task){
        const item = this.list.find(l => l.task == task)
        if (item) {
            item.status="completed"
        } else {
            console.log(`${task} does not exist.`)
        }
    }

    listAllTasks(){
        console.log(this.list)
    }
}
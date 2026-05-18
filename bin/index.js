#!/usr/bin/env node

const fs = require("fs");

const args = process.argv.slice(2);

const command = args[0];
//  console.log(process.argv);
//  console.log(command);
if (command === "add") {

    const description = args[1];

    if (!description) {
        console.log("Provide task description");
        process.exit(1);
    }

    if (!fs.existsSync("tasks.json")) {
        fs.writeFileSync("tasks.json", "[]");
    }

    const data = fs.readFileSync(
        "tasks.json",
        "utf-8"
    );

    const tasks = JSON.parse(data);

    const maxId = tasks.reduce(
        (max, task) => Math.max(max, task.id),
        0
    );

    const newTask = {
        id: maxId + 1,
        description: description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    tasks.push(newTask);

    fs.writeFileSync(
        "tasks.json",
        JSON.stringify(tasks, null, 2)
    );
   
    console.log(
        `Task added successfully (ID: ${newTask.id})`
    );
}
else if(command==="delete") {
    const req_ID=Number(args[1]);
    if(isNaN(req_ID)) {
        console.log("Invalid ID");
        process.exit(1);
    }
    const data=fs.readFileSync("tasks.json","utf-8");
    const tasks=JSON.parse(data);
    const taskExists=tasks.some(
        task=>task.id===req_ID
    );
    const filtered_tasks=tasks.filter(
        task=>task.id!==req_ID
    );
    if (!taskExists) {
        console.log("Task ID not found");
        process.exit(1);
    }
    fs.writeFileSync(
        "tasks.json",
        JSON.stringify(filtered_tasks,null,2)
    );
    console.log(`Task ${req_ID} deleted successfully`);
}
else if (command === "list") {

    const status = args[1];

    const data = fs.readFileSync(
        "tasks.json",
        "utf-8"
    );

    const tasks = JSON.parse(data);

    if (!status) {
        console.table(tasks);
    }

    else {

        const filteredTasks = tasks.filter(
            task => task.status === status
        );

        console.table(filteredTasks);
    }
}
if(command==="update") {
    const taskId=Number(args[1]);
    const newDescription=args[2];
    if(isNaN(taskId)) {
        console.log("Invalid ID");
        process.exit(1);
    }
    if (!newDescription) {
        console.log("Provide new description");
        process.exit(1);
    }

    const data=fs.readFileSync("tasks.json","utf-8");
    const tasks=JSON.parse(data);
    const taskExists=tasks.find(
        task=>task.id===taskId
    );

    if(!taskExists) {
        console.log("Task ID not found");
        process.exit(1);
    }
    taskExists.description=newDescription;
    taskExists.updatedAt=new Date().toISOString();
    fs.writeFileSync(
        "tasks.json",
        JSON.stringify(tasks,null,2)
    );
    console.log(`Task ${taskId} updated to newDescription`);
    
}

else if (command === "mark-in-progress") {

    const taskId = Number(args[1]);

    if (isNaN(taskId)) {
        console.log("Invalid task ID");
        process.exit(1);
    }

    const data = fs.readFileSync(
        "tasks.json",
        "utf-8"
    );

    const tasks = JSON.parse(data);

    const task = tasks.find(
        task => task.id === taskId
    );

    if (!task) {
        console.log("Task not found");
        process.exit(1);
    }

    task.status = "in-progress";

    task.updatedAt = new Date().toISOString();

    fs.writeFileSync(
        "tasks.json",
        JSON.stringify(tasks, null, 2)
    );

    console.log(
        `Task ${taskId} marked as in-progress`
    );
}
else if (command === "mark-done") {

    const taskId = Number(args[1]);

    if (isNaN(taskId)) {
        console.log("Invalid task ID");
        process.exit(1);
    }

    const data = fs.readFileSync(
        "tasks.json",
        "utf-8"
    );

    const tasks = JSON.parse(data);

    const task = tasks.find(
        task => task.id === taskId
    );

    if (!task) {
        console.log("Task not found");
        process.exit(1);
    }

    task.status = "done";

    task.updatedAt = new Date().toISOString();

    fs.writeFileSync(
        "tasks.json",
        JSON.stringify(tasks, null, 2)
    );

    console.log(
        `Task ${taskId} marked as done`
    );
}
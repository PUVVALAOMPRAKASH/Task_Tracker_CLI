# Task Tracker CLI

A simple command-line task tracker built using Node.js.

## Features

- Add tasks
- Update tasks
- Delete tasks
- Mark tasks as done
- Mark tasks as in-progress
- List all tasks
- List tasks by status

## Installation

Clone the repository:

```bash
git clone https://github.com/PUVVALAOMPRAKASH/Task_Tracker_CLI.git
```
Go to project folder:
```bash
cd Task_Tracker_CLI
```
Install globally:
```bash
npm link
```
Usage
Add Task
```bash
task-cli add "Buy groceries"
```
Update Task
```bash
task-cli update 1 "Buy groceries and cook dinner"
```
Delete Task
```bash
task-cli delete 1
```
Mark Task as In Progress
```bash
task-cli mark-in-progress 1
```
Mark Task as Done
```bash
task-cli mark-done 1
```
List All Tasks
```bash
task-cli list
```
List Done Tasks
```bash
task-cli list done
```
List Todo Tasks
```bash
task-cli list todo
```
List In-Progress Tasks
```bash
task-cli list in-progress

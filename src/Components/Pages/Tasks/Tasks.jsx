import "./Tasks.scss";
import AddTaskBtn from "../../Sharable/AddTaskBtn/AddTaskBtn";
import Task from "../../Sharable/Task/Task";

export default function Tasks({state, updateState}) {
    const {tasks, option} = state;
    function filterTasks() {
        let allTask = JSON.parse(JSON.stringify(tasks));
        Object.keys(option).forEach((opt) => {
            allTask = allTask.filter(t => t[opt] === option[opt]);
        })
        return allTask;
    }
    function updateTask(id, updates) {
        const index = tasks.findIndex(t => t.id === id);
        if(index === -1) {
            return;
        }
        let updated = JSON.parse(JSON.stringify(tasks));
        updated[index] = {...updated[index], ...updates};
        updateState({tasks: updated});
    }
    function deleteTask(id) {
        const index = tasks.findIndex(t => t.id === id);
        if(index === -1) {
            return;
        }
        let updated = JSON.parse(JSON.stringify(tasks));
        updated.splice(index, 1);
        updateState({tasks: updated});
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    const day = date.getDate();
    const convertedDate = date.getFullYear().toString() + ', ' + months[date.getMonth()] + ((day<=9) ? ' 0' : ' ') + day.toString();

    const displayTask = filterTasks().map((task, index) => {
        task.index = index+1;
        return <div className="w30" key={task.id}>
            <div className="directoryName"><div>Main</div></div>
            <Task  task={task} updateTask={updateTask} deleteTask={deleteTask} />
        </div>;
    })

    return <div className="tasks">
        <div className="taskData">
            <div className="taskHeader flex alignCenter justifyBetween">
                <div className="searchBar">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="date">
                    {convertedDate}
                </div>
                <div>
                    <AddTaskBtn state={state} updateState={updateState} ></AddTaskBtn>
                </div>
            </div>
        </div>
        <div className="allTasksParent">
            <div className="allTasks flex alignCenter">
                {displayTask}
                <div onClick={() => updateState({openTask: true})} className="addTaskDiv">Add new task</div>
            </div>
        </div>
    </div>;
}
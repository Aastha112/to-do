import "./Tasks.css";
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
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    const day = date.getDate();
    const convertedDate = date.getFullYear().toString() + ', ' + months[date.getMonth()] + ((day<=9) ? ' 0' : ' ') + day.toString();
    
    const displayTask = filterTasks().map((task) => {
        return <Task key={task.id} task={task} />;
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
                    <AddTaskBtn></AddTaskBtn>
                </div>
            </div>
        </div>
        <div className="allTasksParent">
            <div className="allTasks flex alignCenter">
                {displayTask}
            </div>
        </div>
    </div>;
}


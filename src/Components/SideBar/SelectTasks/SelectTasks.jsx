import AddTaskBtn from "../../Sharable/AddTaskBtn/AddTaskBtn";
import "./SelectTasks.scss";

export default function SelectTasks({state, updateState}) {

    const {taskList} = state;
    const list = taskList.map((task) => {
        return <div className={`taskTitle ${task.isSelected ? 'selected' : ''}`}
             onClick={() => selectTask(task)}
             key={task.id}>{task.title}</div>
    })
    function selectTask(task) {
        updateState(
            {
                option: task.filter,
                taskList: taskList.map((listItem) => ({...listItem, isSelected: listItem.id === task.id}))
            });
    }
    
    return <div className="selectSidebar whiteBg">
        <div className="todoTitle flex alignCenter justifyCenter upperCase font28">To-do list</div>
        <div className="taskBtn">
            <AddTaskBtn state={state} updateState={updateState} ></AddTaskBtn>
        </div>
        <div>{list}</div>
    </div>;
}

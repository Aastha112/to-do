import "./LeftSidebar.scss";
import {useState} from "react";

export default function LeftSidebar({taskList, setTaskList}) {

    const list = taskList.map((task) => {
        return <div className={`${task.isSelected ? 'selected' : ''}`}
             onClick={() => selectTask(task)}
             key={task.id}>{task.title}</div>
    })
    function selectTask(task) {
        setTaskList(prevState => {
            return prevState.map((listItem) => ({...listItem, isSelected: listItem.id === task.id}));
        })
    }
    return <div>
        <div>
            {list}
        </div>
    </div>
}

import "./LeftSidebar.scss";

export default function LeftSidebar({state, updateState}) {
    const {taskList} = state;
    const list = taskList.map((task) => {
        return <div className={`${task.isSelected ? 'selected' : ''}`}
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
    return <div>
        <div>
            {list}
        </div>
    </div>
}

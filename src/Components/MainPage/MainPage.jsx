import "./MainPage.scss";

export default function MainPage({state, updateState}) {
    const {tasks, option} = state;
    function filterTasks() {
        let allTask = JSON.parse(JSON.stringify(tasks));
        Object.keys(option).forEach((opt) => {
            allTask = allTask.filter(t => t[opt] === option[opt]);
        })
        return allTask;
    }
    const displayTasks = filterTasks().map((task) => {
        return <div key={task.id}>{task.description}</div>;
    })
    return <div>
        {displayTasks}
    </div>
}

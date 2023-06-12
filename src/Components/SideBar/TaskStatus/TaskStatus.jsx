import "./TaskStatus.scss";

export default function TaskStatus({state}) {
    const {tasks} = state;
    const completedTasks = tasks.filter((t) => t.isCompleted);
    const width = Math.round((completedTasks.length) / (tasks.length) * 100);
    return <div className="whiteBg taskStatus">
        <div className="p-20">
            <div className="allTasks flex alignCenter justifyBetween">
                <div>All tasks</div>
                <div>{completedTasks.length}/{tasks.length}</div>
            </div>
            <div className='progressBar'>
                <div style={{width: width+'%'}} className={`completedBar`}></div>
            </div>
        </div>
    </div>;
}

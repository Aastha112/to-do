import "./AddTaskBtn.scss";

export default function AddTaskBtn({state, updateState}) {
    return <div onClick={() => updateState({openTask: true, mode: 'add'})} className="blueBg whiteFont flex alignCenter justifyCenter addTaskBtn">
        Add new task
    </div>;
}
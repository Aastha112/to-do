import "./TaskStatus.scss";

export default function TaskStatus() {
    return <div className="whiteBg taskStatus">
        <div className="p-20">
            <div className="allTasks flex alignCenter justifyBetween">
                <div>All tasks</div>
                <div>2/3</div>
            </div>
        </div>
    </div>;
}

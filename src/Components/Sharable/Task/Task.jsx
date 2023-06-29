import "./Task.scss";

export default function Task({task, updateTask, updateState, deleteTask}) {

    return <div onClick={() => updateState({openTask: true, mode:'edit'})}
     className={`task whiteBg flex justifyBetween flex-col ${task.index===1 ? 'blueBg whiteFont' : ''}`}>
            <div className="flex justifyBetween flex-col flex-1">
                <div>
                    <div className="title fw-500 mb-8">{task.title ? task.title : `Task ${task.id}`}</div>
                    <div className="description mb-8">{task.description}</div>
                </div>
                <div className="flex alignCenter">
                    {task.date ? task.date : '04/12/2023'}
                </div>
            </div>
            <div className="footer w-100 flex alignCenter justifyBetween">
                <div className="">
                    <div onClick={() => updateTask(task.id, {isCompleted: !task.isCompleted})} className={`fw-500 status ${task.isCompleted ? 'completed' : 'uncompleted'}`}>
                        {task.isCompleted ? 'completed' : 'uncompleted'}
                    </div>
                </div>
                <div className="icons flex alignCenter justifyCenter">
                    <div className="star">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 fill-none"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
                        </div>
                        {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6 fill-rose-500 stroke-rose-500 "><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
                        </div> */}
                    </div>
                    <div className="delete">
                        <div onClick={() => deleteTask(task.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-5 h-5 sm:w-6 sm:h-6 "><path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div className="threeDot">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" fill="currentColor" className="w-4 sm:w-5 h-4 sm:h-5"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
    </div>;
}
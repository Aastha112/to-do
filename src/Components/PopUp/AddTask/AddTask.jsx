import "./AddTask.scss";
import {useState} from "react";

export default function AddTask({state, updateState}) {
    const {tasks} = state;
    const [isImportant, setIsImportant] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const addTask = (event) => {
        event.preventDefault();
        const data = {};
        document.querySelectorAll('form input').forEach(t => {
            console.log(t)
            data[t.name] = t.value;
        })
        document.querySelectorAll('form textarea').forEach(t => {
            data[t.name] = t.value;
        })
        const newTask = {
            id: new Date().getTime(),
            title: data.title,
            description: data.description,
            date: data.date,
            isImportant: isImportant,
            isCompleted: isCompleted
        }
        const newList = tasks;
        newList.push(newTask);
        console.log(newList);
        updateState({
            tasks: newList
        })
        closeModal();
    }
    function closeModal() {
        updateState({
            openTask: false
        })
    }
    return <div className='overLay'>
        <div className='addTask p-20'>
            <div className='taskHeader flex alignCenter justifyBetween'>
                <div className='grayFont font22 fw-500'>Add a task</div>
                <div onClick={closeModal} className='closeBtn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
            <div className="form">
                <form onSubmit={addTask} className=''>
                    <div>
                        <div>Title</div>
                        <input type="text" name='title' placeholder="e.g, study for the test"/>
                    </div>
                    <div>
                        <div>Date</div>
                        <input type="date" name='date'/>
                    </div>
                    <div>
                        <div>Description (optional)</div>
                        <textarea name="description" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <div>Select a directory</div>
                        <select name="" id="">
                            <option value="">Main</option>
                            <option value="">Sub</option>
                        </select>
                    </div>
                    <div className="">
                        <label>
                            <input name='important' onChange={() => (setIsImportant(!isImportant))} type="checkbox" checked={isImportant} />
                            <span>Mark as important</span>
                        </label>
                    </div>
                    <div className="">
                        <label>
                            <input name='completed' onChange={() => (setIsCompleted(!isCompleted))} type="checkbox" checked={isCompleted} />
                            <span>Mark as completed</span>
                        </label>
                    </div>
                    <button type='submit' className="blueBg whiteFont flex alignCenter justifyCenter addTaskBtn">
                        Add a task
                    </button>
                </form>
            </div>
        </div>
    </div>;
}

import './App.scss';
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import {useState} from "react";
import MainPage from "./Components/MainPage/MainPage";

function App() {
    const defaultTasks = [
        {
            id: 1,
            title: 'All tasks',
            isSelected: true,
            filter: {}
        },
        {
            id: 2,
            title: 'Important tasks',
            isSelected: false,
            filter: {
                isImportant: true
            }
        },
        {
            id: 3,
            title: 'Completed tasks',
            isSelected: false,
            filter: {
                isCompleted: true
            }
        },
        {
            id: 4,
            title: 'Uncompleted tasks',
            isSelected: false,
            filter: {
                isCompleted: false
            }
        }
    ];
    // const [taskList, setTaskList] = useState(defaultTasks);
    // const [option, setOption] = useState({isImportant: false, isCompleted: false});

    const allTasks = [
        {
            id: 1,
            description: 'all d1',
            isImportant: false,
            isCompleted: false
        },
        {
            id: 2,
            description: 'important d2',
            isImportant: true,
            isCompleted: false
        },
        {
            id: 3,
            description: 'important completed d3',
            isImportant: true,
            isCompleted: true
        },
        {
            id: 4,
            description: 'completed d4',
            isImportant: false,
            isCompleted: true
        },
        {
            id: 5,
            description: 'all d5',
            isImportant: false,
            isCompleted: false
        },
    ];
    // const [tasks, setTasks] = useState(allTasks);

    const [state, setState] = useState({
        taskList: defaultTasks,
        option: {},
        tasks: allTasks
    });
    function updateState(updates) {
        setState(prevState => ({
            ...prevState, ...updates
        }))
    }

  return (
    <div className="App">
        <div>
            <LeftSidebar state={state} updateState={updateState} />
        </div>
        <div>
            <MainPage state={state} updateState={updateState}/>
        </div>
    </div>
  );
}

export default App;

import './App.scss';
import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
import {useState} from "react";

function App() {
    const defaultTasks = [
        {
            id: 1,
            title: 'All tasks',
            isSelected: true
        },
        {
            id: 2,
            title: 'Important tasks',
            isSelected: false
        }
    ];
    const [taskList, setTaskList] = useState(defaultTasks);
  return (
    <div className="App">
      <LeftSidebar taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;

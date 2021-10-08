import './App.css';
import Filters from './Components/Filters';
import Header from './Components/Header';
import TaskManger from './Components/TaskManger';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr />
      <Filters/>
      <TaskManger/>
    </div>
  );
}

export default App;

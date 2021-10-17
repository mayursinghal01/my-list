import './App.css';
import DebounceSearch from './Components/Debounce/DebounceSearch';
import Header from './Components/Header';



// import InfinteUseIntersection from './Components/InfiniteScrolling/InfinteUseIntersection';
// import InfiniteScrolling from './Components/InfiniteScrolling/InfiniteScrolling';
import TaskManger from './Components/TaskManger';
import Filters from './Components/Filters';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr />
      <Filters/>
      <TaskManger/>
      <DebounceSearch/>


      {/* <InfiniteScrolling/>
      
      <InfinteUseIntersection/> */}
    </div>
  );
}

export default App;

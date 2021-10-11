import './App.css';

import Header from './Components/Header';
import InfinteUseIntersection from './Components/InfiniteScrolling/InfinteUseIntersection';
// import InfiniteScrolling from './Components/InfiniteScrolling/InfiniteScrolling';
// import TaskManger from './Components/TaskManger';
// import Filters from './Components/Filters';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr />
      {/* <InfiniteScrolling/>
      <Filters/>
      <TaskManger/> */}
      <InfinteUseIntersection/>
    </div>
  );
}

export default App;

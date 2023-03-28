import './App.css';
import Home from './Home';
import SingleMovie  from './SingleMovie'
import {Routes,Route} from "react-router-dom"
import Error from './Error';

function App() {
  return (
   
      <Routes>   
        <Route path="/" element ={<Home />} />
        <Route path="movie/:id" element ={<SingleMovie />} />
        <Route path="*" element ={<Error />} />
      </Routes>
     
  );
}

export default App;

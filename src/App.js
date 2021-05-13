
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import history from './components/history'
import YearRockets from './components/yearRockets';
import Rockett from './components/rocket2'

function App() {

  return (
    
      <Router>
      
       <Route exact path="/"> <Rockett/></Route>

       <Route exact path="/rockets"  component={YearRockets}></Route>
      </Router>
  );
}

export default App;

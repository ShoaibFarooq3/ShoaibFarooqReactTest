import { BrowserRouter as Router,Link, Switch, Route } from "react-router-dom";
import './App.css';
import CompData  from "./compData";
import Data from "./Data";
import Home from "./Home";

function App() {
 
  return (
    
    <Router>
      <div className="container">
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/data">Data</Link>
          </li>
          
        </ul>
        <Switch>
          <Route exact path ="/">
              <Home/>
          </Route>
          <Route path ="/data">
            <Data />
          </Route>
         
       
        </Switch>
      </div>
    </Router>
    
    );
}

export default App;

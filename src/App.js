import './App.css';
import './bootstrap/flatly.min.css';
import Register from './Components/Register';
import Data from './Components/Data'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Register}/>
        <Route path="/view-data" component={Data} />
      </Switch>
    </Router>
  );
}

export default App;

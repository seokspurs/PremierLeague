import './App.css';
import MainPageComponent from './main';
import {Switch, Route} from 'react-router-dom';
import SimulComponent from './simul';
import TeamComponent from './team';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent/>
        </Route>
        <Route exact={true} path="/simul">
          <SimulComponent/>
        </Route>
        <Route exact={true} path="/team/:id">
          <TeamComponent/>
        </Route>
      </Switch>
    </div>
  )
    
}

export default App;

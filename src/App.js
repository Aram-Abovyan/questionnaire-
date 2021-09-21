import { MainPage } from './pages/main';
import { StartingPage } from './pages/layouts/start';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>

        <Route exact path='/binaryx'>
          <StartingPage
            pageName="binaryx"
          />
        </Route>

        <Route exact path='/digital-agency'>
          <StartingPage
            pageName="digital-agency"
          />
        </Route>

        <Route exact path='/ease'>
          <StartingPage
            pageName="ease"
          />
        </Route>

        <Route exact path='/foodex'>
          <StartingPage
            pageName="foodex"
          />
        </Route>

        <Route exact path='/powercode'>
          <StartingPage
            pageName="powercode"
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { MainPage } from './pages/main';
import { StartingPage } from './pages/layouts/start';
import { QuestionPage } from './pages/layouts/question';
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

        <Route exact path='/:category/complete'>
          <StartingPage />
        </Route>

        <Route exact path='/:category'>
          <StartingPage />
        </Route>

        <Route exact path='/:category/:questionIndex'>
          <QuestionPage />
        </Route>

        
      </Switch>
    </div>
  );
}

export default App;

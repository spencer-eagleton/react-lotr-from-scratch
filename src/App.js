import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
        </header>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

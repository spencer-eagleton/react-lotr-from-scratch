import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/films">Films</NavLink>
        </header>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

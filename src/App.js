import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li>
              <Link to="/búsqueda">Search</Link>
            </li>
            <li>
              <Link to="/registro">Create account</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/búsqueda">
            <Search />
          </Route>
          <Route path="/registro">
            <CreateAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserHome from './Pages/UserHome';
import AdminHome from './Pages/AdminHome';
import Cart from './Components/CheckOut';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={UserHome} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path='/checkout' component={Cart}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

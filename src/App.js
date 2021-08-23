import {BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
let App=()=> {
  return (
    <>
    <Router>  
      <Switch>
        <Route exact path="/">
           <Home />
        </Route>
        <Route exact path="/Login">
           <Login />
        </Route>
      </Switch>
    </Router>
    </>
  );
};

export default App;

import "./App.css";
import NavBar from "./Components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Manager from "./Components/Manager";
import View from "./Components/View";
import HomePage from "./Components/HomePage";

function App() {
  return (
   
    <BrowserRouter>
     <NavBar></NavBar>
      <Switch>
        <Route path="/HomePage" component={HomePage} exact></Route>
        <Route path="/About" component={About} exact></Route>
        <Route path="/View" component={View} exact></Route>
        <Route path="/Manager" component={Manager} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

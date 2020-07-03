import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ChartPage from "./components/chart/ChartPage";
import TablePage from "./components/table/TablePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container" style={{ margin: "30px" }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/chart" component={ChartPage} />
        <Route path="/table" component={TablePage} />
      </Switch>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;

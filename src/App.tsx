import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JobsScreen from "./screens/JobsScreen";

function App() {
  return (
    <div className="main__screen">
      <div className="main__container">
        <JobsScreen />
      </div>
    </div>
  );
}

export default App;

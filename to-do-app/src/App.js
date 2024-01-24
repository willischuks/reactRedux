
import React from "react";
import { Provider } from "react-redux";
import store from "./Components/Store";
import Addtask from "./Components/AddTask";
import ListTask from './Components/ListTask';
import TextLinkExample from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextLinkExample />
      <Provider store={store}>
        <Addtask />
        <ListTask />
    </Provider>
    </div>
  );
}

export default App;

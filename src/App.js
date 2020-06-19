import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="side-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <Header />
      </div>
    </Provider>
  );
}

export default App;

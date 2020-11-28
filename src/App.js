import React from "react";
import { Provider } from "react-redux";
import MessageCard from "./Components/MessageCard";
import ProductItem from "./Components/ProductItem";
import { store } from "./redux/store";
import "./styles.css";

export default function App() {
  return (
    <React.Fragment>
      <nav className="navbar bg-primary text-white">
        <a href="/" className="navbar-brand text-white">
          React - Redux | Event Binding | with single Reducuer file
        </a>
      </nav>
      <Provider store={store}>
        <MessageCard />
        <ProductItem />
      </Provider>
    </React.Fragment>
  );
}

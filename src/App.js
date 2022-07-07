import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data";
import Navigation from "./components/Navigation";
import { createContext, useState } from "react";

export const Sarmala = createContext();

function App() {
  const [state, setState] = useState({
    bookList: data,
    cart: [],
  });

  const addToCart = (book) =>
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((m) =>
        m.id === id ? { ...m, count: m.count + 1 } : m
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((m) =>
        m.id === id ? { ...m, count: m.count > 1 ? m.count - 1 : 1 } : m
      ),
    });
  };

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((m) => m.id !== id),
    });
  };

  return (
    <Sarmala.Provider
      value={{ state, addToCart, increase, decrease, removeFromCart }}
    >
      <div className="App">
        <h1>Alışveris sepeti yapımı Reactjs</h1>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Sarmala.Provider>
  );
}

export default App;

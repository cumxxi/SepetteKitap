import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Sarmala } from "../App";

const Products = (props) => {
  const context = useContext(Sarmala);
  return (
    <div className="container">
      <h2>
        <button className="btn btn-Light">
          <h3>Kitap Listesi</h3>
        </button>
        <Link to="/cart">
          <button className="btn btn-Light">
            <h3>Sepetim</h3>
          </button>
        </Link>
      </h2>
      {context.state.bookList.map((m) => (
        <div className="book" key={m.id}>
          <img src={m.picture} alt={m.about}></img>
          <div>
            <h4>{m.company}</h4>
            <p>Yazar : {m.name}</p>
            <p>Fiyat : {m.price} &#8378; </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => context.addToCart(m)}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

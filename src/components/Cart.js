import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Sarmala } from "../App";

const Cart = () => {
  const context = useContext(Sarmala);

  const sumReducer = context.state.cart.reduce(
    (total, m) => (total = total + m.price * m.count),
    0
  );

  const sumBook = context.state.cart.reduce((total, m) => total + m.count, 0);

  return (
    <div className="container">
      <h2>
        <Link to="/">
          {" "}
          <button className="btn btn-Light">
            <h3>Kitap Listesi</h3>
          </button>
        </Link>{" "}
        <button className="btn btn-Light">
          <h3>({sumBook}) Sepetim</h3>
        </button>
      </h2>
      <h3>Toplama Sepet Tutarı: {sumReducer.toFixed(2)} &#8378;</h3>
      {context.state.cart.map((m) => (
        <div key={m.id}>
          <div className="book">
            <img src={m.picture} alt={m.about}></img>
          </div>
          <div>
            <h4>Kitabın Adı : {m.company}</h4>
            <p>Yazarı : {m.name}</p>
            <p>Fiyat : {m.price} &#8378;</p>
            <p>Toplam : {(m.price * m.count).toFixed(2)} &#8378;</p>
            <p>
              Sepetinizde bu kitaptan toplamda <span>{m.count}</span> adet
              mevcut
            </p>
            <button
              onClick={() => context.decrease(m.id)}
              type="button"
              className="btn btn-light"
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => context.removeFromCart(m.id)}
            >
              Sepetten Çıkar
            </button>
            <button
              onClick={() => context.increase(m.id)}
              type="button"
              className="btn btn-light"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

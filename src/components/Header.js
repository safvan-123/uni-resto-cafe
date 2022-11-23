import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const { cart } = useSelector((state) => ({
    cart: state.cart.cart,
  }));
  return (
    <div
      className="my-flex"
      style={{
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
    >
      <div>
        <h4>UNI Resto Cafe</h4>
      </div>
      <div
        className="my-flex"
        style={{
          justifyContent: "space-between",
        }}
      >
        <h5 style={{ padding: "0 10px" }}>My Orders</h5>
        <span style={{ position: "relative" }}>
          <FaShoppingCart size={"1.4rem"} />
          <span className="cart_count" style={{ color: "#fff" }}>
            {cart}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;

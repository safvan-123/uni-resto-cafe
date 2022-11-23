import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";

function ProductCard({ dish }) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState({
    count: 0,
    dishId: "",
  });

  useEffect(() => {
    dispatch(addToCart(counter.count));
  }, [counter, dispatch]);

  return (
    <div className="product-card">
      <div className="product-title">
        <h2>{dish?.dish_name}</h2>
        <h3>
          {dish?.dish_currency}
          {dish?.dish_price}
        </h3>
        <p>{dish?.dish_description}</p>
        {dish?.dish_Availability && (
          <div className="product-counter">
            <AiOutlineMinus
              onClick={() =>
                setCounter({
                  ...counter,
                  dishId: dish?.dish_id,
                  count: counter.count > 0 ? counter.count - 1 : 0,
                })
              }
            />
            <span>{counter?.dishId === dish?.dish_id ? counter.count : 0}</span>

            <AiOutlinePlus
              onClick={() =>
                setCounter({
                  ...counter,
                  dishId: dish?.dish_id,
                  count: counter.count + 1,
                })
              }
            />
          </div>
        )}

        {dish?.addonCat?.length >= 1 && (
          <p style={{ paddingTop: 5, color: "red" }}>
            Customizations available
          </p>
        )}
        {dish?.dish_Availability === false && (
          <p style={{ paddingTop: 5, color: "red" }}>Not available</p>
        )}
      </div>
      <div>{dish?.dish_calories} calories</div>

      <div>
        <img src={dish?.dish_image} alt="product" />
      </div>
    </div>
  );
}

export default ProductCard;

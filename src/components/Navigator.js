import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigateTab } from "../features/navigate/navogateSlice";

function Navigator() {
  const dispatch = useDispatch();

  const { currentNavId, products } = useSelector((state) => ({
    currentNavId: state.navigate.currentNavId,
    products: state.products,
  }));

  const productList = products?.products[0]?.table_menu_list;

  return (
    <div
      className="my-flex my-navigator"
      style={{ justifyContent: "space-evenly" }}
    >
      {productList?.map((nav) => (
        <div
          className={currentNavId === nav.menu_category_id ? "active-nav" : ""}
          key={nav?.menu_category_id}
        >
          <button onClick={() => dispatch(navigateTab(nav?.menu_category_id))}>
            {nav?.menu_category}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Navigator;

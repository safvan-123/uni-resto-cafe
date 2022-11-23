import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../features/product/productSlice";

function Home() {
  const dispatch = useDispatch();

  const { currentNavId, products } = useSelector((state) => ({
    currentNavId: state.navigate.currentNavId,
    products: state.products,
  }));

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const productList = products?.products[0]?.table_menu_list;

  return (
    <div>
      {" "}
      <Header />
      <Navigator />
      {products?.status === "loading" && <p>loading...</p>}
      <div>
        {productList?.map((prod) => (
          <Fragment key={prod.menu_category_id}>
            {currentNavId === prod.menu_category_id &&
              prod?.category_dishes?.map((dish) => (
                <ProductCard dish={dish} key={dish?.dish_id} />
              ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Home;

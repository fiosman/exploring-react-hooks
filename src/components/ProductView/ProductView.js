import React, { useState, useEffect } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  const [isSideOpen, setIsSideOpen] = useState(
    window.localStorage.getItem("isSideOpen") === "true" ? true : false
  );
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    if (selectedProduct) setIsSideOpen(true);
  }, [selectedProduct]);

  useEffect(() => {
    if (!isSideOpen) setSelectedProduct();
  }, [isSideOpen]);

  useEffect(() => {
    if (!isSideOpen) window.localStorage.setItem("isSideOpen", false);
    if (isSideOpen) window.localStorage.setItem("isSideOpen", true);
  }, [isSideOpen]);

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              isSelected={selectedProduct ? selectedProduct.id === item.id : false}
              product={item}
              onClick={() => setSelectedProduct(item)}
            />
          ))}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle" onClick={() => setIsSideOpen(!isSideOpen)}>
            {isSideOpen ? ">" : "<"}
          </div>
        </div>
        <ProductDetails visible={isSideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;

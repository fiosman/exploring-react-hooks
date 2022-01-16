import React, { useState, useEffect } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    console.log(isSideOpen);
    console.log(selectedProduct);
  }, []);
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

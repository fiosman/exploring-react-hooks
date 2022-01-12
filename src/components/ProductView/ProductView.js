import React, { useState } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
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
        <ProductDetails visible={isSideOpen} selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;

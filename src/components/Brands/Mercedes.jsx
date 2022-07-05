import React, { useEffect } from "react";
import ProductCard from "../Card/Card";

const Mercedes = ({ getProducts, products, deleteProduct }) => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="section">
      {products.map(item => (
        <ProductCard key={item.id} item={item} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
};

export default Mercedes;

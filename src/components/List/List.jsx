import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Brands from "../Brands/Brands";
import ProductCard from "../Card/Card";

const List = ({ getProducts, products, deleteProduct }) => {
  // console.log(products)
  const [state, setState] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({ q: state });
  }, [state]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <>
      <TextField
        style={{ width: "200px" }}
        value={state}
        onChange={e => setState(e.target.value)}
        variant="outlined"
      />
      <section
        style={{
          backgroundImage:
            "url(https://oir.mobi/uploads/posts/2021-03/1616544747_32-p-fon-serii-gradient-34.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: 0,
        }}
        className="section">
        <div className="container">
          <div className="section__inner">
            {products.map(item => (
              <ProductCard
                key={item.id}
                item={item}
                deleteProduct={deleteProduct}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// {products.map((item)=> <ProductCard key={item.id} item={item} deleteProduct={deleteProduct}  />)}

// display: flex;
// flex-wrap: wrap;
// justify-content: space-between;

export default List;

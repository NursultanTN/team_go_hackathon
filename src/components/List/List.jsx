import { Box, Pagination, Slider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Brands from "../Brands/Brands";
import ProductCard from "../Card/Card";

const List = ({ getProducts, products, deleteProduct, pages }) => {
  // console.log(products)
  const [state, setState] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([1, 100000]);

  console.log(pages);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: state,
      _page: currentPage,
      _limit: 4,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [state, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <>
      <Box>
        <Pagination
          onChange={(event, pages) => {
            console.log(pages);
            setCurrentPage(pages);
          }}
          page={currentPage}
          count={pages}
          color="primary"
        />
        <Box style={{ width: "600px", marginLeft: "50px" }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={(e, value) => {
              setPrice(value);
              // console.log(value);
            }}
            valueLabelDisplay="auto"
            min={0}
            max={100000}
            step={1000}
          />
        </Box>
        <TextField
          style={{ width: "200px" }}
          value={state}
          onChange={e => setState(e.target.value)}
          variant="outlined"
        />
      </Box>

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

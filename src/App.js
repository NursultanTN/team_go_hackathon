import React, { useReducer, useState } from "react";
import Header from "./components/Header/Header";
import AddProduct from "./components/AddProduct/AddProduct";
import Users from "./components/Users/Users";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";
import Brands from "./components/Brands/Brands";
import Tesla from "./components/Brands/Tesla";
import Lexus from "./components/Brands/Lexus";
import Mercedes from "./components/Brands/Mercedes";
import Audi from "./components/Brands/Audi";
import Toyota from "./components/Brands/Toyota";
import Bmw from "./components/Brands/Bmw";
import Footer from "./components/Footer/Footer";

const App = () => {
  // ! CRUD-Create, Read, Update, Delate
  // !для хранения данных
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  const INIT_STATE = {
    products: [],
    oneProduct: null,
    pages: 0,
  };
  function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload.data,
          pages: Math.ceil(action.payload.headers["x-total-count"] / 4),
        };
      case "GET_ONE":
        return { ...state, oneProduct: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! Create - POST
  const API = "http://localhost:8001/products";

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);

    getProducts();
  }

  // ! Read _GET
  async function getProducts() {
    let res = await axios(API + window.location.search);
    // setProducts(res.data);

    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
    // console.log(res);
    //  console.log('from app.js', res);
  }
  // console.log(products);
  // ! Delete - DELETE
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }
  // ! Details - GET API/id
  async function getOneProduct(id) {
    let res = await axios(`${API}/${id}`);
    setOneProduct(res.data);
  }
  // console.log(oneProduct);

  // ! Update - PATCH,PUT
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  return (
    // указываем что роутинг будет в браузере
    <div className="App">
      <BrowserRouter>
        {/* header будет на всех наших страницах */}
        <Header />
        {/* для перечисления роутов */}
        <Routes>
          {/* непосредственно сами роуты */}
          <Route
            path="/"
            element={
              <List
                pages={state.pages}
                deleteProduct={deleteProduct}
                products={state.products}
                getProducts={getProducts}
                addProduct={addProduct}
              />
            }
          />
          <Route path="/brands" element={<Brands />} />
          <Route path="/tesla" element={<Tesla />} />
          <Route path="/lexus" element={<Lexus />} />
          <Route path="/mercedes" element={<Mercedes />} />
          <Route path="/audi" element={<Audi />} />
          <Route path="/toyota" element={<Toyota />} />
          <Route path="/bmw" element={<Bmw />} />

          <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
          <Route
            path="/edit/:id"
            element={
              <Edit
                oneProduct={oneProduct}
                getOneProduct={getOneProduct}
                updateProduct={updateProduct}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <Details oneProduct={oneProduct} getOneProduct={getOneProduct} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    // <div>
    //   <Header />
    //   <Pokemons />
    //   <Pokemons2 />
    //   <RickAndMorty />
    //   <Users />
    // </div>
  );
};

export default App;

import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Edit = ({ getOneProduct, oneProduct, updateProduct }) => {
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params);
  const [brand, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [info, setInfo] = useState("");

  function handleSave() {
    let editedProduct = {
      brand,
      price: +price,
      image,
      info,
    };
    updateProduct(params.id, editedProduct);
    navigate("/");
    console.log(editedProduct);
  }
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  // console.log(oneProduct);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.brand);
      setPrice(oneProduct.price);
      setImage(oneProduct.info);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);
  return (
    <div className="section">
      <Container>
        {oneProduct ? (
          <>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}>
              <TextField
                value={brand}
                onChange={e => setTitle(e.target.value)}
                label="Brand"
                variant="filled"
              />
              <TextField
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                label="Price"
                variant="filled"
              />
              <TextField
                value={info}
                onChange={e => setInfo(e.target.value)}
                label="Info"
                variant="filled"
              />
              <TextField
                value={image}
                onChange={e => setImage(e.target.value)}
                label="Image"
                variant="filled"
              />
              <Button onClick={() => handleSave()} variant="outlined">
                Save
              </Button>
            </Box>
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

export default Edit;

import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();
  //   console.log(navigate);
  const [brand, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [info, setInfo] = useState("");

  function handleSave() {
    if (!brand || !price || !image || !info) {
      alert("Заполните все поля!");
    } else {
      let newProduct = {
        brand,
        price: +price,
        image,
        info,
      };
      // navigate("/");
      addProduct(newProduct);
      console.log(newProduct);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundImage:
          "url(https://st.depositphotos.com/1018174/3768/i/600/depositphotos_37680595-stock-photo-picture-presenting-grey-background.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginTop: 0,
      }}
      className="section">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}>
        <TextField
          value={brand}
          label="Brand"
          variant="outlined"
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type="number"
          value={price}
          label="Price"
          variant="outlined"
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          value={image}
          label="Image"
          variant="outlined"
          onChange={e => setImage(e.target.value)}
        />
        <TextField
          value={info}
          label="Info"
          variant="outlined"
          onChange={e => setInfo(e.target.value)}
        />
        <Button onClick={() => handleSave()} sx={{ m: 1 }} variant="contained">
          Save
        </Button>
      </Box>
    </div>
  );
};

export default AddProduct;

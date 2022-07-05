import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Details = ({ getOneProduct, oneProduct }) => {
  console.log(oneProduct);
  const params = useParams();
  // console.log(params);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  return (
    <Container>
      {oneProduct ? (
        <Box
          marjinTop={"20px"}
          display={"flex"}
          flexDirection={"column"}
          alingItems={"center"}>
          <Typography variant="h5">{oneProduct.title}</Typography>
          <Typography color={"green"} variant="h5">
            {oneProduct.price}
          </Typography>
          <Typography color={"blue"} variant="h6">
            {oneProduct.info}
          </Typography>
          <img width={"50%"} src={oneProduct.image} alt="" />
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Details;

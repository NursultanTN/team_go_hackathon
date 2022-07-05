import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Brands = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "550px",
        backgroundImage:
          "url(https://on-desktop.com/wps/Auto_Other_auto_wallpapers_Car_on_a_black_background_019338_.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginTop: 0,
      }}
      className="section">
      <div>
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <Link to="/tesla">
            <Button
              style={{ marginTop: "30px", color: "white" }}
              variant="outlined"
              color="primary">
              Tesla
            </Button>
          </Link>
          <Link to="/lexus">
            <Button
              style={{ marginTop: "30px", color: "white" }}
              variant="outlined"
              color="secondary">
              Lexus
            </Button>{" "}
          </Link>
          <Link to="/mercedes">
            <Button
              style={{ marginTop: "30px", color: "white" }}
              variant="outlined"
              color="primary">
              Mercedes Benz
            </Button>
          </Link>
          <Link to="/audi">
            <Button
              style={{ marginTop: "30px", color: "white" }}
              variant="outlined"
              color="secondary">
              Audi
            </Button>
          </Link>
          <Link to="/toyota">
            <Button
              style={{ marginTop: "30px", color: "white" }}
              variant="outlined"
              color="primary">
              Toyota
            </Button>
          </Link>
          <Link to="/bmw">
            <Button
              style={{ marginTop: "30px", color: "white" }}
              variant="outlined"
              color="secondary">
              BMW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;

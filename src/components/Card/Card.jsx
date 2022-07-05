import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCard({ item, deleteProduct }) {
  return (
    <Card
      sx={{
        backgroundImage:
          "url(https://p4.wallpaperbetter.com/wallpaper/10/668/60/dark-grey-background-ios-13-hd-wallpaper-preview.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
        maxWidth: "30%",
        marginBottom: "3%",
        marginTop: "3%",
        marginLeft: "2%",
        marginRight: "2%",
      }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        sx={{ width: "220px" }}
        alt="Добавить продукт"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.brand}
        </Typography>
        <Typography
          style={{ color: "white" }}
          variant="body2"
          color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(item.id)} size="small">
          Delete
        </Button>
        <Link to={`/edit/${item.id}`}>
          <Button size="small">Edit</Button>
        </Link>
        <Link to={`/details/${item.id}`}>
          <Button size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

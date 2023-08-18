import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Products = () => {
  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image="/images13.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Fasshion Shoes.
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            Price
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            100$
          </Typography>
          <Typography variant="h6" color="text.secondary">
            This
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Udate
        </Button>
        <Button size="large" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Products;

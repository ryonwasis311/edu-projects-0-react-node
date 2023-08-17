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
          <Typography gutterBottom variant="h5" component="div">
            Fasshion Shoes.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
export default Products;

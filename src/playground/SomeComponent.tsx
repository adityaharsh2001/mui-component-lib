import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CustomTheme } from "mui-custom-lib";
import { useThemeToggler } from "mui-custom-lib";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface IProps {}

export const SomeComponent: React.FC<IProps> = () => {
  const themeToggler = useThemeToggler();
  const theme = useTheme<CustomTheme>();

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Button
        variant="contained"
        onClick={() => themeToggler()} 
        endIcon={theme.isLightTheme ? <Brightness3Icon /> : <Brightness7Icon />}
      >
        Toggle Theme
      </Button>
      <Card >
        <CardActionArea>
          <CardMedia
            
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

SomeComponent.displayName = "SomeComponent";
SomeComponent.defaultProps = {};

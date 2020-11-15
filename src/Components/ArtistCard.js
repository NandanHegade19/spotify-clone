import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import '../Styles/ArtistCard.css';


export default function MediaCard( {image}) {
  //const classes = useStyles();

  return (
    <div className="cards">
        <Card className = "">
          <CardActionArea>
            <CardMedia
              className= "cardsImg"
              image={image}
              title="Contemplative Reptile"
            />
          </CardActionArea>          
        </Card>
    </div>
  );
}

import React from 'react';
import { makeStyles, Card, Grid, CardContent, CardMedia, Typography, } from '@material-ui/core';

const Front = () =>
{
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,

        },
        media: {
          height: 140,
        },
      });

    const classes = useStyles();

    return(
        <div>
            <Grid container >
                <Grid item xs={10}>
                    <Card className={classes.root}>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    );
};

export default Front;
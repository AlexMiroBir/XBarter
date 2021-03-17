/**
 *
 *
 * THIS is Material UI Grid 3x3
 * source: https://material-ui.com/ru/components/grid/
 *
 *
 *
 */





import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Box,Paper} from "@material-ui/core";

import MySwiper from "../carousel/swiper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: 'inherit',
        boxShadow:'none',
        marginLeft:"50%"
    },
    swipeDiv:{
        display:'flex',
        justifyContent:'center',


    }
}));

const MainGrid =()=> {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid className={classes.swipeDiv} item xs={12} >
                   <MySwiper/>
                </Grid>


            </Grid>
        </div>
    );
}

export default MainGrid
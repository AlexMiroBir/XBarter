import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import HeaderAvatar from "../avatar";

const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: 0,
        backgroundColor: "rgb(131,58,180)",
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',

        borderRadius:'0 0 15px 15px'
    },

}));


const Header = () => {
    const classes = useStyles();

    return (
        <Paper  justifyContent="flex-end" className={classes.paper}>

            <HeaderAvatar/>


        </Paper>

    )

}

export default Header
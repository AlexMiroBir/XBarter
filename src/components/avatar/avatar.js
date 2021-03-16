import React from 'react';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


const useStyles = makeStyles((theme) => ({

    avatar: {
        width: '100px',
        height: '100px',
        marginLeft: 'auto',
        border: '10px white solid'

    },

    button: {
        marginLeft: 'auto',
    }
}));


const HeaderAvatar = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>

            <Button className={classes.button} aria-controls="customized-menu"
                    aria-haspopup="true"
                    onClick={handleClick}>
                <Avatar alt="Avatar"
                        src="data:image/jpeg;base64,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"
                        className={classes.avatar}/>
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </StyledMenu>


        </>

    )


}

export default HeaderAvatar
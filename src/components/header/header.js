import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import HeaderAvatar from "../avatar";
import ThemeSwitcher from "../theme-switcher";

const useStyles = makeStyles((theme) => ({

    avatarDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: "center",
        marginLeft:'auto',
    }

}));


const Header = () => {
    const classes = useStyles();

    return (


            <div className={classes.avatarDiv}>
                <HeaderAvatar/>
                <ThemeSwitcher/>
            </div>
    )

}

export default Header
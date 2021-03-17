import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {setDarkTheme, setLightTheme} from "../../redux/main-slice";
import {useDispatch, useSelector} from "react-redux";
import Brightness3SharpIcon from '@material-ui/icons/Brightness3Sharp';
import Brightness5SharpIcon from '@material-ui/icons/Brightness5Sharp';

const IOSSwitch = withStyles((theme) => ({


    root: {
        width: 66,
        height: 52/1.5,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(32px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#5b5d5b',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#5b5d5b',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 48/1.5,
        height: 48/1.5,
    },
    track: {
        borderRadius: 52 / 2/1.5,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({classes, ...props}) => {
    return (<Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const additionalStyles = makeStyles(theme => ({

    switchGroup: {
        display: 'flex',
        alignItems: 'center',
    },
    sunIcon:{
        marginRight:"5px"

    },
    moonIcon:{
        marginLeft:"-25px"

    }


}));


const ThemeSwitcher = () => {
    const classes = additionalStyles();
    const theme = useSelector(state => state.mainSlice.theme)
    const dispatch = useDispatch();


    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
    });


    const handleChange = (event) => {
        if (theme === 'light') {
            dispatch(setDarkTheme())
        } else {
            dispatch(setLightTheme())
        }
        console.log(event.target.name)
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <div className={classes.switchGroup}>

           <Brightness5SharpIcon
               className={classes.sunIcon}
                fontSize={'small'}/>

            <FormControlLabel
                control={<IOSSwitch checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"/>}
            />
           <Brightness3SharpIcon
               className={classes.moonIcon}
               fontSize={'small'}/>
        </div>
    );

}

export default ThemeSwitcher
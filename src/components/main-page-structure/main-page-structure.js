import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {createMuiTheme, CssBaseline, Grid, ThemeProvider, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
//////////////////////////////////////
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlareSharpIcon from '@material-ui/icons/FlareSharp';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Header from "../header/index";






const icon = (text) => {
    switch (text) {

        case "sun":
            return <FlareSharpIcon/>;
        case 'Drafts':
            return <FlareSharpIcon/>;
        ///...............
        default:
            return <InboxIcon/>
    }
}


////////////////////////////////
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    headerToolbar:{
        backgroundColor: "rgb(131,58,180)",
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',

    },

    leftSide:{
        backgroundColor: {}  ,
    }
}));


///////////////////////////////


const MainPage = ({include}) => {











    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const userTheme = useSelector(state => state.mainSlice.theme)


    const LightTheme = createMuiTheme({

        overrides: {
            MuiCssBaseline: {
                '@global': {
                    body: {
                        backgroundColor: 'white'
                    },
                },
            },
        },
    });
    const DarkTheme = createMuiTheme({

        overrides: {
            MuiCssBaseline: {
                '@global': {
                    body: {
                        backgroundColor: 'rgb(42, 47, 46)'
                    },
                },
            },
        },
    });




    return (
        <>

            <ThemeProvider theme={userTheme === 'light' ? LightTheme : DarkTheme}>

                <CssBaseline/>
                <div className={classes.root}>


                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >




                        <Toolbar className={classes.headerToolbar}>



                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon/>
                            </IconButton>



                            <Header/>


                        </Toolbar>
                    </AppBar>


                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbar}>
                            Скрытое Место
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts', 'sun'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{icon(text)}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>


                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Typography paragraph>
                            {include}
                        </Typography>

                    </main>
                </div>


            </ThemeProvider>
        </>
    );
}

export default MainPage
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link, NavLink} from "react-router-dom";
import {makeStyles} from '@mui/styles';
import {useDispatch, useSelector} from "react-redux";
import {AccountCircle} from "@mui/icons-material";
import {Logouts} from "../../store/actions/AuthActions";


const useStyles = makeStyles({
    root: {
        '& .active': {
            color: '#e3e0e0',
        }
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 600,
    }
});
export const NavBar = () => {
    const {isAuth, users} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const classes = useStyles();

    const logOut = () => {
        dispatch(Logouts())
    }

    return (
        <Box sx={{flexGrow: 1}} className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to={'/'} className={classes.navLink}>Home</Link>

                    </Typography>

                    {isAuth ? <>
                            <Typography variant="p" mr={2} component="div" sx={{
                                display: "flex",
                                flexDirection: "column", alignItems: "center", justifyContent: "center"
                            }}>
                                <AccountCircle/>
                                {users.name}
                            </Typography>
                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </> :
                        <><Button>
                            <NavLink className={classes.navLink} to="/signin">Sign in</NavLink>
                        </Button>
                            <Button>
                                <NavLink className={classes.navLink} to="/signup">Sign up</NavLink>
                            </Button>
                        </>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";

export const Home = () => {
    const {isAuth} = useSelector(state => state.auth);
    return(
        <Typography component={"div"} mt={3} variant={"h2"} sx={{display:"flex",
            flexDirection:"column",
            alignItems:"center", justifyContent:"center"}}>
            Home Page
            {isAuth ? <Typography component={"div"} variant={"h3"} sx={{color: "#09c73b"}}>
                    You are logged in
            </Typography>
            :<Typography component={"div"} variant={"h3"} sx={{color: "#f08000"}}>
                    You are not logged in
                </Typography>}
        </Typography>
    )
}

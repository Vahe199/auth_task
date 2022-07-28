import React, {useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {NavBar} from "./components/layout/NavBar";
import SignIn from "./components/Form/SignIn";
import {SignUp} from "./components/Form/SignUp";
import {Home} from "./components/Home";
import {SuccessPage} from "./components/SuccessPage";
import {useDispatch, useSelector} from "react-redux";
import {CheckAuth} from "./store/actions/AuthActions";

const theme = createTheme();
function App() {
const {isAuth} = useSelector(state => state.auth);
const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')) {
            dispatch(CheckAuth())
        }
    },[])
  return (
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="signin" element={isAuth ? <Navigate to='/success' /> :<SignIn/>} />
            <Route path="signup" element={isAuth ? <Navigate to='/success' /> :<SignUp/>} />
            <Route path="success" element={!isAuth ? <Navigate to='/' /> :<SuccessPage/>} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;

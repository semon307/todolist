import React, {useEffect} from 'react'
import './App.css'
import { TodolistsList } from './UI/TodolistsList/TodolistsList'
import {useDispatch, useSelector} from 'react-redux'
import { AppRootStateType } from './BLL/store'
import {authMeTC, RequestStatusType} from './BLL/app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

import { ErrorSnackbar } from './UI/Common/ErrorSnackbar/ErrorSnackbar'
import {Login} from "./UI/Login/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {logoutTC} from "./BLL/AuthReducer";



type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(authMeTC())
    }, [])
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    if (!isInitialized){
        return  <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>

    }
    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {isLoggedIn ? <Button color="inherit" onClick={logoutHandler}>Logout</Button> : null}
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path={"/"} element={<TodolistsList demo={demo}/>}/>
                    <Route path={"login"} element={<Login/>}/>
                    <Route path="404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                    <Route path="*" element={<Navigate to='/404'/>}/>
                </Routes>
                {/*<TodolistsList demo={demo}/>*/}
                {/*<Login/>*/}
            </Container>
        </div>
    )
}

export default App

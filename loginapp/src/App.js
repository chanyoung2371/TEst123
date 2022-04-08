import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { loginUser } from './actions/user_action';
import SignUp from './pages/SignUp';
import Router from "./routes";
import {Link, Route, Routes } from 'react-router-dom'
function App() {
    return (

        <div>
            <Router/>
        </div>

    )
}

export default App

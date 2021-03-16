import React from 'react';
//import {useState, useEffect} from 'react';
import Account from './component/Account';


function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

export default function App() {

    const token = {getToken};

    if(!token) {
        return  <Account/>
    } else {
        return <h1>Bienvenue</h1>
    }
}


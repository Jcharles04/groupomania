import React from 'react';
//import {useState} from 'react';
import Account from './component/Account';
import useToken from './component/token/Token'


export default function App() {

    const {token, setToken } = useToken();

    return (
        token? <h1>Bienvenue</h1> : <Account setToken={setToken}/>
    )
}
import React from 'react';
import {useState} from 'react';
import './App.css';
import Account from './component/Account';

function App() {

    const [token, setToken] = useState(null)

    return (
        
        token ? <h1>Bienvenue</h1> : <Account onConnect={setToken}/>
        
    );
}

export default App;

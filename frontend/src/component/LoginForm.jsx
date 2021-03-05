import React from 'react';
import {useState} from 'react';

export default function Connexion () {

    const [details, setDetails] = useState({login:"", password:""});

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='login'>Login</label>
                    <input type='text' name='login' id='login' value={details.login} onChange={e => setDetails({...details, login: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={details.password} onChange={e => setDetails({...details, password: e.target.value})}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

function handleSubmit (e) {
    e.prenventDefault();
    const data = {details}
    {Login}
}

async function Login(data) {

    try {

        const response = await fetch('http://localhost:8080/login/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(details)
        });
        if (response.ok) {
            const json = await response.json();
            return json?.token;

        } else {
            console.log('erreur serveur %s', response.status, response.statusText);
        }

    } catch (err)  {
        console.log('erreur', err)
    }
};
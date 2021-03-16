import {useState} from 'react';

export default function Connexion () {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState(''); 


    const handleSubmit = async function (e) {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/login/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({login: login, password: password})
        });
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            window.localStorage.setItem('token', JSON.stringify(json))
            return json?.token
        } else {
            console.log('erreur serveur %s', response.status, response.statusText);
        }
    } 

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='login'>Login</label>
                    <input type='text' name='login' id='login' value={login} onChange={e => setLogin(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}



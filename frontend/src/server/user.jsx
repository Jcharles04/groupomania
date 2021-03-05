import React from 'react';

export default async function Login() {

    try {

        const response = await fetch('http://localhost:8080/login/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({login: login, password: password})
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
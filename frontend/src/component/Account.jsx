import React from 'react';
import {useState} from 'react';
import Connexion from './LoginForm';
import Inscription from './SignupForm';

export default function Account() {

    const [page, setPage] = useState('Connexion')

    let content = null
    if (page === 'Connexion') {
        content = <Connexion/>
    } else  {
       content = <Inscription/>
    }

    return ( <>
        <ButtonGroup currentPage={page} onClick={setPage}/>
        {content}
        </>
    )
}


function ButtonGroup ({currentPage, onClick}) {

    /*const buttonDisabled = function (page) {
        if (page === currentPage) {
            disabled = "true"
        }
    }*/

    return (
        <>
            <button type="button" onClick={() => onClick('Connexion')} /*disabled={buttonDisabled}*/>Connexion</button>
            <button type="button" onClick={() => onClick('Inscription')} /*disabled={buttonDisabled}*/>Inscritpion</button>
        </>
    )
}

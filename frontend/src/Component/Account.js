import React from 'react';
import useState from 'react';

export default function Account () {

    const [state, setState] = useState(<LoginForm/>);

    const handleClick = function (e) {
        e.preventDefault()

    }

    return (
        <div>
            <button onClick={handleClick}>{state}</button>
        </div>
    )
}

function LoginForm () {
    return (
        <div>
            Hello
        </div>
    )
}

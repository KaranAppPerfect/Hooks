import React, { useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';
import useCounter from './useCounter';

function Main2() {

    const count = useCounter(1000);
    
    const fn = useEffectEvent( () => {
        const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
        document.body.style.backgroundColor = randomColor;
    } );

    useEffect( () => {
        const id = setInterval(fn, 1000);
        return clearInterval(id);
    })
    

    return (
        <div>
            Counter {count}
        </div>
    );
}

export default Main2;
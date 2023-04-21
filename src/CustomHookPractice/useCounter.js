import React, { useState , useEffect} from 'react';

function useCounter(delay) {
    const [counter,setCounter] = useState(0);

    useEffect( () => {
        
        const timer = setInterval( () => {
            setCounter((count) => count+1);
        }, delay)

        return () => {
            clearInterval(timer);
        }
    }, [delay]);

    return counter;
}

export default useCounter;
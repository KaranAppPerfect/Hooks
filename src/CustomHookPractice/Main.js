import React, { useState } from 'react';
import useCounter from './useCounter';

function Main() {


    const [delay,setDelay] = useState(1000);
    const count = useCounter(delay);

    return (
        <div>
            <label> Delay {delay} ms</label> <br/>
            <input type='range' value={delay} min='10' max='2000' 
                    onChange={(e) => setDelay(e.target.value)} />
            <br/>
            Counter : {count}
        </div>
    );
}

export default Main;
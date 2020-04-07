import React, { useState, Fragment, useEffect} from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`useEffect => you clicked ${count}`)
    });

    return (
        <Fragment>
            You click {count} times. <br/>
            <button onClick={() => {setCount(count+1)}}> click On me</button>
        </Fragment>
    )
}

export default Example;
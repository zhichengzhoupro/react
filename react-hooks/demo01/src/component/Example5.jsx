import React, {useState, Fragment, createContext, useContext, useEffect} from 'react';

const Context = createContext();

const DisplayText = () => {
    let count = useContext(Context);
    return (
        <h2>I've received {count} from parent</h2>
    )

};

const Example5 = () => {
    const [count, setCount] = useState(0);


    useEffect(()=> {
       console.log(`Example 5 componentDidMount => ${count}`);
        return ()=> {
            console.log('Example 5 : componentUnmount')
        }
    }, []);

    const [isOnline, setIsOnline] = useState(null);

    useEffect(()=> {
        console.log(`on Count componentDidMount => ${count}`);
        return ()=> {
            console.log('Example 5 on count : componentUnmount')
        }
    }, [isOnline]);

    return (
        <Fragment>
            <span>You have click {count} times</span>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click to Add Count
            </button>
            <br/>
            <Context.Provider value={count}>
                <DisplayText/>
            </Context.Provider>

        </Fragment>
    )
}

export default  Example5;
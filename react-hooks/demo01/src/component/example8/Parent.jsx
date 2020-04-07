import React, {Fragment, useState, useMemo, useEffect} from "react";

const Parent = () => {

    const [xiaohong, setXiaohong] = useState('xiaohong');
    const [zhiling, setZhiling] = useState('zhiling');

    return (
        <Fragment>
            <button onClick={() => {
                setXiaohong(new Date().getTime() + 'xiao hong walk to us')
            }}>xiao hong
            </button>
            <button onClick={() => {
                setZhiling(new Date().getTime() + 'zhi ling walk to us')
            }}>zhi ling
            </button>
            <Child name={xiaohong}>{zhiling}</Child>
        </Fragment>
    )
}

const Child = ({name, children}) => {

    const [nameChanged, setNameChanged] = useState(name);

    const changeXiaohong = (name) => {
        console.log(1)
        setNameChanged(name + ' walk to us');
    };

    useMemo(() => {
        changeXiaohong(name)
    }, [name]);

    useEffect(() => {
        console.log(' mounnt or update for name')
    }, [name]);

    useEffect(() => {
        console.log('did mounnt')
    }, []);

    return (
        <>
            <div>{nameChanged}</div>
            <div>{children}</div>
        </>
    )
}

export default Parent;
import React, {useState, Fragment, useRef, useEffect} from 'react';

const Example9 = () => {
    const [inputValue, setInputValue] = useState('username');
    const inputEl = useRef(null);
    const inputRef = useRef(null);

     const onButtonClick = () => {
        inputEl.current.value = "HELLO zhicheng";
    };

     useEffect(() => {
        inputRef.current.value = inputValue;
     });

    return (
        <>
            <input type="text" ref={inputEl}/>
            <button onClick={onButtonClick}>在input上显示文字</button>
            <br/>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={inputRef}/>
        </>
    )
}

export default Example9
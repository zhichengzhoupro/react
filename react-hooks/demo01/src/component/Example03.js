import React, { useState, Fragment} from 'react';

function Example3() {
    const [name, setName] = useState('zhicheng');
    const [age, setAge] = useState(20);
    const [sex, setSex] = useState('male');
    const [job, setJob] = useState('developper');

    return (
        <Fragment>
           <p> I'm {name} , age {age} ,{sex} , work as {job}</p>
        </Fragment>
    )
}

export default Example3;
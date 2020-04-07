import {action, observable} from "mobx";
import React, {createContext, Fragment, useContext, useEffect} from "react";
import {observer} from "mobx-react";

class TestStore {
    @observable counter = 0;

    @action changeCounter = () => {
        this.counter++;
    }
}

const TestStoreContext = createContext(new TestStore());

const ShowTextArea = observer(() => {

    const testStore = useContext(TestStoreContext);

    useEffect(() => {


        return () => {
            console.log('did comp')
        }
    }, [testStore.counter]);

    return (
        <span>{testStore.counter}</span>
    )
});

const ChangeCounterButton = observer(() => {

    const testStore = useContext(TestStoreContext);

    return (
        <button onClick={testStore.changeCounter}>counter ++ </button>
    )
});


const Example10 = observer(() => {
    return (
        <Fragment>
            <ShowTextArea/>
            <ChangeCounterButton/>
        </Fragment>
    )
})

export default Example10;
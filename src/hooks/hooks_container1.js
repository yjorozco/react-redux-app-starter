import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTION from '../store/actions/actions';
import Context from '../utils/context';


//main app 
const HooksContainer1 = () => {

    const context = useContext(Context);

    const [stateValue, setValue] = useState(0);
    const incrementValue = () => {
        setValue(stateValue + 1);
    }
    const decrementValue = () => {
        setValue(stateValue - 1);
    }

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

    const [useEffectValue, setUseEffectValue] = useState(null);


    useEffect(() => {
        setTimeout(() => setUseEffectValue('useEfect Worked'), 3000);
    }, [stateValue])

    const changeuseEffectvalue = () => {
        setUseEffectValue('some string');
    }

    const handleDispatchTrue = () => {
        dispatch(ACTION.success());
    }
    const handleDispatchFalse = () => {
        dispatch(ACTION.failure());
    }
    return (
        <div>
            React Hooks
            <br />
            <button onClick={() => incrementValue()} > Inc Local State</button>
            <button onClick={() => decrementValue()} > Inc Local State</button>
            <button onClick={() =>changeuseEffectvalue()} > Change use effect</button>
            <button onClick={() =>handleDispatchTrue()} > dispatch true</button>
            <button onClick={() =>handleDispatchFalse()} > dispatch false </button>
            <button onClick={() =>context.addGlobalValue()} >add global </button>
            <button onClick={() =>context.decGlobalValue()} >dec global </button>
            <button onClick={() =>context.dispatchContextTrue()} >True Global Context </button>
            <button onClick={() =>context.dispatchContextFalse()} >False Global Context </button>
            <br />
            <div>
                <br />
                {useEffectValue
                    ? <p>{useEffectValue}</p> :
                    <p>No value</p>
                }
                <br />
                {
                    state.stateprop1
                    ? <p> state prop1 is true</p>
                    : <p> state prop1 is false</p>
                }
                <br />
                {
                   context.reducerGlobalState
                    ? <p> reducer state prop2 is true</p>
                    : <p> reducer state prop2 is false</p>
                }
                <br />

                <p>Local State: {stateValue}</p>
                <br />
                <p>Global State: {context.valueGlobalState}</p>
            </div>
        </div>
    )
}


export default HooksContainer1;

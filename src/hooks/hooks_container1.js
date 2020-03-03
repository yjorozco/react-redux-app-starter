import React, { useState, useEffect } from 'react';



//main app 
const HooksContainer1 = () => {


    const [stateValue, setValue] = useState(0);
    const incrementValue = () => {
        setValue(stateValue + 1);
    }
    const decrementValue = () => {
        setValue(stateValue - 1);
    }

    const [useEffectValue, setUseEffectValue] = useState(null);

    useEffect(() => {
        setTimeout(() => setUseEffectValue('useEfect Worked'), 3000);
    }, [stateValue])

    const changeuseEffectvalue = () => {
        setUseEffectValue('some string');
    }
    return (
        <div>
            React Hooks
            <br />
            <button onClick={() => incrementValue()} > Inc Local State</button>
            <button onClick={() => decrementValue()} > Inc Local State</button>
            <button onClick={() =>changeuseEffectvalue()} > Change use effect</button>
            <br />
            <div>
                <br />
                {useEffectValue
                    ? <p>{useEffectValue}</p> :
                    <p>No value</p>
                }
                <br />
                <p>Local State: {stateValue}</p>
            </div>
        </div>
    )
}


export default HooksContainer1;

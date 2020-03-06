import React, {useState, useReducer, useContext} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer';
import Context from '../utils/context';

const HooksForm = () => {

    const context = useContext(Context);
    const [valueChange, setValueChange] = useState('');
    const [valueSubmit, setValueSubmit] = useState('');
    const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState);
    const handleuseStateChange = (event) => {
        setValueChange(event.target.value);
    }
    const handleuseStateSubmit = (event) => {
        event.preventDefault();
        setValueSubmit(event.target.useState.value);
    }

    const handleuseReducerChange = (event) => {        
        userDispatch(ACTIONS.user_input_change(event.target.value));
    }
    const handleuseReducerSubmit = (event) => {
        event.preventDefault();
        userDispatch(ACTIONS.user_input_submit(event.target.userState.value));
    }
    return (
        <div>
            <form onSubmit={handleuseStateSubmit}>
                <label>React useState:</label>
                <input id="useState" type='text'  onChange={handleuseStateChange}/>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={handleuseReducerSubmit}>
                <label>React userREducer:</label>
                <input id="userState" type='text'  onChange={handleuseReducerChange}/>
                <button type="submit">Submit</button>
            </form>
            <form onSubmit={context.useContextHandleSubmit}>
                <label>React userContext:</label>
                <input id="userContext" type='text'  onChange={context.useContextHandleChange}/>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2> React useSate:</h2>
                <p>Change: {valueChange}</p>
                <p>Submit: {valueSubmit}</p>

            </div>
            <div>
                <h2> React userReducer:</h2>
                <p>Change: {userState.user_text_change}</p>
                <p>Submit: {userState.user_text_submit}</p>

            </div>
            <div>
                <h2> React userContext:</h2>
                <p>Change: {context.useContextChange}</p>
                <p>Submit: {context.useContextSubmit}</p>

            </div>
        </div>
    )
}

export default HooksForm;
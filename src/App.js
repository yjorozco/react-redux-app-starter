import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as UserReducer from './store/hooks_state/user_input_hooks_reducer';
import * as ACTION from './store/actions/actions';

//main app 
const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);
  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);
  const [stateUser, dispatchUser] = useReducer(UserReducer.UserReducer, UserReducer.initialState);
  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1);
  }

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1);
  }


  const handleContextDispatchTrue = () => {
    dispatchContextGlobal(ACTION.success());
  }
  const handleContextDispatchFalse = () => {
    dispatchContextGlobal(ACTION.failure());
  }

  const handleuseReducerContextChange = (event) => {     
    dispatchUser(ACTION.user_input_change(event.target.value));
  }
  const handleuseReducerContextSubmit = (event) => {
      event.preventDefault();
      event.persist(); 
      dispatchUser(ACTION.user_input_submit(event.target.userContext.value));
  }
  return (
    <div>
      React
      <Context.Provider value={{
        valueGlobalState: stateGlobal,
        addGlobalValue: () => incrementGlobalState(),
        decGlobalValue: () => decrementGlobalState(),
        reducerGlobalState: stateContextGlobal.stateprop2,
        dispatchContextTrue: () =>handleContextDispatchTrue(),
        dispatchContextFalse: () =>handleContextDispatchFalse(),
        useContextChange: stateUser.user_text_change,
        useContextSubmit: stateUser.user_text_submit,
        useContextHandleChange: (event)=>handleuseReducerContextChange(event),
        useContextHandleSubmit: (event) =>  handleuseReducerContextSubmit(event),
      }} >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;

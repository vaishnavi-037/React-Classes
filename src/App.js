import React, { useReducer, useState } from "react";
import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import ClassCounterUE from "./Components/ClassCounterUE";
import ClassIntervalCounter from "./Components/ClassIntervalCounter";
import ClassMouse from "./Components/ClassMouse";
import HookCounter from "./Components/HookCounter";
import UEcleanUp from "./Components/UEcleanUp";
import UEcounter from "./Components/UEcounter";
import UEdataFetching from "./Components/UEdataFetching";
import UEindividualDataFetching from "./Components/UEindividualDataFetching";
import UEintervalCounter from "./Components/UEintervalCounter";
import UEmouseMover from "./Components/UEmouseMover";
import USarray from "./Components/USarray";
import UseContextCompC from "./Components/UseContextCompC";
import UseReduceCounter from "./Components/UseReduceCounter";
import UseReducerComplex from "./Components/UseReducerComplex";
import UseReducerMultiple from "./Components/UseReducerMultiple";
import DataFetchingUseState from "./Components/DataFetchingUseState";
import USobject from "./Components/USobject";
import USprevStateCounter from "./Components/USprevStateCounter";
import USUCcomponentA from "./Components/USUCcomponentA";
import USUCcomponentB from "./Components/USUCcomponentB";
import USUCcomponentC from "./Components/USUCcomponentC";
import DataFetchingUseReducer from "./Components/DataFetchingUseReducer";
import UCparentComp from "./Components/UCparentComp";
import UseMemoCounter from "./Components/UseMemoCounter";
import UseRefFocusInput from "./Components/UseRefFocusInput";
import UseRefClassTimer from "./Components/UseRefClassTimer";
import UseRefTimer from "./Components/UseRefTimer";
import DocTitleOne from "./Components/CustomHooks/DocTitleOne";
import DocTitleTwo from "./Components/CustomHooks/DocTitleTwo";
import CounterOne from "./Components/CustomHooksCounter/CounterOne";
import CounterTwo from "./Components/CustomHooksCounter/CounterTwo";
import UserForms from "./Components/CustomHooksInput/UserForms";

//useContext
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

//useReducer-useContext(USUCcomponent{letter}), count value is shared across the components that nested deep insde components
//A, B->D, C->E->F,  count and reducer method is shared and use by A,D,F using useContext
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <USprevStateCounter /> */}
      {/* <USobject /> */}
      {/* <USarray /> */}
      {/* <ClassCounterUE /> */}
      {/* <UEcounter /> */}
      {/* <ClassMouse /> */}
      {/* <UEmouseMover /> */}
      {/* <UEcleanUp /> */}
      {/* <ClassIntervalCounter /> */}
      {/* <UEintervalCounter /> */}
      {/* <UEdataFetching /> */}
      {/* <UEindividualDataFetching /> */}
      <UserContext.Provider value={"Vaishnavi"}>
        <ChannelContext.Provider value={"Software Developer"}>
          <UseContextCompC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <UseReduceCounter /> */}
      {/* <UseReducerComplex /> */}
      {/* <UseReducerMultiple /> */}
      {/* Count - {count}
        <USUCcomponentA />
        <USUCcomponentB />
        <USUCcomponentC /> */}
      {/* <DataFetchingUseState /> */}
      {/* <DataFetchingUseReducer /> */}
      {/* <UCparentComp /> */}
      {/* <UseMemoCounter /> */}
      {/* <UseRefFocusInput /> */}
      {/* <UseRefClassTimer /> */}
      {/* <UseRefTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <UserForms /> */}

    </div>
    // </CountContext.Provider>
  );
}

export default App;
//Hooks allow us to use React features without having to write a class
//eg: state of a component
//Hooks don't work inside classes

//useState -> state
//useEffect -> side effects
//useContext -> context API
//useReducer -> reducers
//useCallback
//useMemo
//useRef
//Custom Hooks:
// it is basically a JS function whose name starts with "use"
// it can also call other Hooks if required
// Why -> share logic ~ Alternative of HOC and Render Props

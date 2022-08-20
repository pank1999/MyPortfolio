import { createContext, useReducer } from "react";

export const TheameContext=createContext();

const INITIAL_STATE={darkMode:false};

const theameReducer=(state,action)=>{
    switch(action.type){
        case "Toggle":
            return {darkMode :!state.darkMode};
        default:
            return state;    
    }
}

export const TheameProvider=(props)=>{
    const [state,dispatch]=useReducer(theameReducer,INITIAL_STATE);
    return(
        <TheameContext.Provider value={{state,dispatch}}>
            {props.children}
        </TheameContext.Provider>
    )
}
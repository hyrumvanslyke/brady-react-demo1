import {createContext, useState, useReducer} from 'react'

const MyContext = createContext()

let initialState ={
    counter: 0,
    name: 'Hyrum'
}

const MyContextProvider = (props) =>{

    let reducer = (state, action)=>{
        switch(action.type){
            case "INCREASE":
                let newCount = state.counter + 1
                return {...state, counter: newCount}
            default: 
            return state

        }
    }

        const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <MyContext.Provider value={{state, dispatch}}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContextProvider}
export default MyContext
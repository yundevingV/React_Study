import { act } from "react-dom/test-utils"

const ADD = "ADD"

export const add = text =>{
    return {
        type: ADD,
        text
    }
}

const initalState = {
    name : ''
}

export default function cart(state=initalState, action){
    switch(action.type) {
        case ADD :
            return {
                ...state,
                name : state.name.concat(action.name)
            }
        
            default :
                return state
    }
}
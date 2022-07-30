import React,{createContext,useReducer,useContext} from 'react'
import axios from 'axios';

//UsersContext 에서 사용할 기본 상태

const initalState = {
    users : {
        loading : false,
        data : null,
        error : null
    },
    user : {
        loading : false,
        data : null,
        error : null
    }
}

//로딩 중
const loadingState = {
    loading : true,
    data : null,
    error: null
}

//성공했을때
const success = data => ({
    loading : false,
    data,
    error : null
})

//실패
const error = error => ({
    loading : false,
    data : null,
    error : error
})

//위에서 만든객체 / 유틸 함수들을 사용해 리듀서 작성

function usersReducer(state, action) {
    switch (action.type) {
        case 'GET_USERS' :
            return {
                ...state,
                users : loadingState
            }
        case 'GET_USERS_SUCCESS' :
            return {
                ...state,
                users : success(action.data)
            }
        case 'GET_USERS_ERROR' :
            return {
                ...state,
                users : error(action.error)
            }
        case 'GET_USER' :
            return {
                ...state,
                users : loadingState
            }
        case 'GET_USER_SUCCESS' :
            return {
                ...state,
                users : success(action.data)
            }
        case 'GET_USER_ERROR' :
            return {
                ...state,
                users : error(action.error)
            }
        default :
            throw new Error(`Unhanded action type: ${action.type}`);
    }
}

//state 용 Context 와 Dispatch 용 Context 따로 만들기

const UsersStateContext = createContext(null)
const UsersDispatchContext = createContext(null)

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트

export function UsersProvider({children}) {
    const [state,dispatch] = useReducer(usersReducer,initalState)
    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    )
}

// state 르 조회하는 Hook

export function useUsersState() {
    const state = useContext(UsersStateContext)
    if (!state) {
        throw new Error('Cannot find UsersProvider')
    }
    return state
}

// Dispatch 를 쉽게 하는 Hook

export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext)
    if (!dispatch) {
        throw new Error('Cannot find UsersProvider')
    }
    return dispatch
}

export async function getUsers(dispatch){
    dispatch({type : 'GET_USERS'})
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )
        dispatch({type : 'GET_USERS_SUCCESS', data : response.data})
    } catch (e) {
        dispatch({type : 'GET_USERS_ERRORS', error : e})
    }
}

export async function getUser(dispatch,id){
    dispatch({type : 'GET_USER'})
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users${id}'
        )
        dispatch({type : 'GET_USER_SUCCESS', data : response.data})
    } catch (e) {
        dispatch({type : 'GET_USER_ERRORS', error : e})
    }
}
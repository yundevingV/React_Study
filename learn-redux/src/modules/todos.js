// 액션 타입선언
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// 액션 함수 선언
let nextID = 1 //고유 id
export const addTodo = text => ({
    type : ADD_TODO,
    todo : {
        id : nextID++,
        //새항목을 추가하고 nextID 값에 1을 더해줌
        text
    }
})

export const toggleTodo = id => ({
    type : TOGGLE_TODO,
    id
})

// 초기 상태 선언
//리듀서의 초기상태는 꼭 객체 타입일 필욘 x
// 배열이여도 되고, 원시타입도 상관 x

const initialState = [
    {
        id : 1,
        text : '예시',
        done : false
    }
]

export default function todos(state = initialState,action) {
    switch(action.type) {
        case ADD_TODO :
            return state.concat(action.todo)
        case TOGGLE_TODO :
            return state.map(
                todo =>
                    todo.id === action.id //id 가 일치하면
                        ? {...todo, done : ~todo.done} //done 값 반전
                        : todo
            )
        default :
            return state
    }
}
import React, {useState} from 'react'

//React.memo 최적화를 위해
const TodoItem = React.memo(function TodoItem({todo, onToggle}){
    return (
        <li
            style={{ textDecoration : todo.done? 'line-through' : 'none'}}
            onClick={() => onToggle(todo.id)}>
            {todo.text}
            </li>
    )
})

const TodoList = React.memo(function TodoList({ todos, onToggle}){
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    )
})

function Todos({todos, onCreate, onToggle}){
    //리덕스를 사용한다고 모든 상태를 리덕스에서 관리 x
    const [text,setText] = useState('')
    const onChange = e => setText(e.target.value)
    const onSubmit = e => {
        e.preventDefault() //submit이벤트 발생시 새로고침 방지
        onCreate(text)
        setText('')
    }


return (
    <div>
        <form onSubmit={onSubmit}>
            <input
                value = {text}
                placeholder = "할일을 입력하세요"
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
        <TodoList todos={todos} onToggle={onToggle} />
    </div>
)
}
export default Todos
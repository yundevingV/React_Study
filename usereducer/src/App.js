
import React, { useMemo, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중 ...')
  return users.filter(user => user.active).length  
}
const initialState = {
  users : [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]
}
// reducer 함수 생성
function reducer(state,action){
  switch (action.type) {
    case 'CHANGE_INPUT' :
      return {
        ...state,
        inputs : {
          ...state.inputs,
          [action.name] : action.value
        }
      }
    case 'CREATE_USER' :
      return {
        users : state.users.concat(action.user)
      }
    case "TOGGLE_USER" :
      return {
        ...state,
        users : state.users.map(user =>
          user.id === action.id ? {...user,active : !user.active} : user
          )
        }
      
    case 'REMOVE_USER' :
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }

    default :
      return state
  }
}
export const UserDispatch = React.createContext(null);
// 내보내주면 나중에 사용하고 싶을 때 
// import {UserDispatch} from './App'
// 라고 불러와서 쓰면됨 ㅎㅎ

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const {users} = state





  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type :'CREATE_USER',
  //     user : {
  //       id : nextId.current,
  //       username,
  //       email
  //     }
  //   })
  //   nextId.current+=1
  //   reset()
  // }, [username,email])

  // const onToggle = useCallback((id) => {
  //   dispatch({
  //     type :'TOGGLE_USER',
  //     id
      
  //   })
  // }, [])

  // const onRemove = useCallback((id) => {
  //   dispatch({
  //     type :'REMOVE_USER',
  //     id
  //   })
  // }, [])

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
    <CreateUser />
    <UserList users={users}  />
    <div> 활성 사용자 수 : {count} </div>
    </UserDispatch.Provider>
  );
}

export default App;
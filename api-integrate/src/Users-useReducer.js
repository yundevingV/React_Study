import React, {useEffect, useReducer} from "react";
import axios from "axios";

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING' :
            return {
                loading : true,
                error : null,
                data : null
            }
        case 'SUCCESS' :
            return {
                loading : false,
                error : null,
                data : action.data
            }
        case 'ERROR' :
            return {
                loading : false,
                error : action.error,
                data : null
            }
        default :
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function UsersuseReducer() {
    const [state,dispatch] = useReducer(reducer, {
        loding : false,
        data : null,
        error : null
    })

    const fetchUsers = async () => {
        dispatch({type : 'LOADING'})
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            dispatch({type : 'SUCCESS', data : response.data})
        } catch (e) {
            dispatch({type : 'ERROR' , error :e})
        }
    }
    useEffect (() => {
        fetchUsers()
    }, [])

    const{loading , data:users,error} = state
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
      <>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
      </>
    );
  }
  
  export default UsersuseReducer;

import { useCallback, useReducer} from 'react'

// function useInputs(initialForm) {
//     const[form,setForm] = useState(initialForm)

//     const onChange = useCallback(e => {
//         const {name,value} = e.target
//         setForm(form => ({...form,[name] : value}))
//     }, [])

//     const reset = useCallback(() => setForm(initialForm), [initialForm])
//     return [form,onChange,reset]

// }
// // useReucer
function reducer(state,action){
    switch (action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                [action.name] : action.value,
            }
            case 'RESET':
                return Object.keys(state).reduce((acc, current) => {
                  acc[current] = '';
                  return acc;
                }, {});
        default :
            return state
    }
}
function useInput(initialForm) {
    const [form,dispatch] = useReducer(reducer,initialForm)
    const onChange = useCallback(e=> {
        const {name,value} = e.target
        
        dispatch({
            type : 'CHANGE_INPUT',
            name,
            value
        })
    }, [])

    const reset = useCallback(e=> {
        
        dispatch({
            type : 'RESET',
            
        })
    }, [])
    return [form,onChange,reset]
}


export default useInput
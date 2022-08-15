// 액션 타입 만들기
// Ducks 패턴을 따를땐 액션 이름에 접두사를 넣기
// Ducks 패턴은 리듀서와 액션 관련 코드들을 하나의 파일에 몰아 작성하는 방식,
// 이러면 다른 모듈과 액션 이름이 중복되는것을 방지 가능

const SET_DIFF = 'counter/SET_DIFF'
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//액션 함수 만들기

export const setDiff = diff => ({type : SET_DIFF , diff})
export const increase = () => ({type : INCREASE })
export const decrease = () => ({type : DECREASE })

// 초기 상태
const initialState = {
    number : 0,
    diff : 1
}

// 리듀서 선언
export default function counter(state = initialState, action){
    switch (action.type) {
        case SET_DIFF :
            return {
                ...state,
                diff : action.diff
            }
        case INCREASE :
            return {
                ...state,
                number : state.number + state.diff
            }
        case DECREASE :
            return {
                ...state,
                number : state.number - state.diff
            }
        default :
            return state
    }
}
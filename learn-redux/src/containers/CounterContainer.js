import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer({number,diff,onIncrease,onDecrease,onSetDiff}) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
      />
  )
}
  //mapStateToProps는 리덕스 스토어의 상태를 조회해 어떤 것을 props로 넣어줄지 정의한다.
  // 현재 리덕스 상태를 파라미터로 받아온다.
  const mapStateToProps = state => ({
    number : state.counter.number,
    diff : state.counter.diff
  })

  // mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
  // dispatch 를 파라미터로 받아옵니다.
  // const mapDispatchToProps = dispatch => ({
  //   onIncrease: () => dispatch(increase()),
  //   onDecrease: () => dispatch(decrease()),
  //   onSetDiff: diff => dispatch(setDiff(diff))
  // });

// mapDispatchToProps가 함수가 아니라 객체면
// bindActionCreators 를 connect 에서 대신 해줍니다.
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff
};
  // connect 함수에는 mapStateToProps, mapDispatchToProps 를 인자로 넣어주세요.
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterContainer);

  // //위 코드는 다음과 동일합니다.
  // const enhance = connet(mapStateToProps,mapDispatchToProps)
  // export default enhance(CounterContainer)
  


  // useSelector 방식
  // // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  // const { number, diff } = useSelector(state => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff
  // }),
  //   shallowEqual
  // );

  // // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  // const dispatch = useDispatch();
  // // 각 액션들을 디스패치하는 함수들을 만드세요
  // const onIncrease = () => dispatch(increase());
  // const onDecrease = () => dispatch(decrease());
  // const onSetDiff = diff => dispatch(setDiff(diff));

  // return (
  //   <Counter
  //     // 상태와
  //     number={number}
  //     diff={diff}
  //     // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
  //     onIncrease={onIncrease}
  //     onDecrease={onDecrease}
  //     onSetDiff={onSetDiff}
  //   />
  // ;



import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import CartContainer from './containers/CartContainer'

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
      <CartContainer />
    </div>
  );
}
  


export default App;
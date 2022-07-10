import './App.css';
import Extendts  from './Extendts';
import Wrapper from './Wrapper'

function App() {
  return (
    <Wrapper>
      <Extendts color='red' backgroundColor='blue' isSpecial={true}/>
      <Extendts color='red' />
    </Wrapper>
  );
}

Extendts.defaultProps = {
  backgroundColor : 'black'
}

export default App;

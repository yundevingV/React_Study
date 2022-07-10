import './App.css';
import Props from './Props'
import Use from './Use';

function App() {
  return (
    <div>
      <Props name='react!' color='red'/>
      <Use />
    </div>
  );
}



export default App;

//props 는 부모 컨포넌트 -> 자식 컴포넌트
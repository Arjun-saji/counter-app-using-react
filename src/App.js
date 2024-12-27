import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 const[count,setCount] = useState(0);
 function increment(){
  setCount(count+1)
 }
 function decrement(){
  setCount(count-1)
 }
  return (
    <div className="counterApp">
       <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;

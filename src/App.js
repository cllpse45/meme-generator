import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Counter from './components/Counter';
import Form from './components/Form';
import Signup from './components/Signup';
import Ternary from './components/Ternary';
import UseEffect from './components/UseEffect';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
      <Input type="text"/>
      
     {/*
      <Counter />
      <Form />
      <Signup/>
      <Ternary />
      <UseEffect />
  */} 
    </div>
  );
}

export default App;

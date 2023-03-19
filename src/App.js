import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Counter />
      <Form />
     {/*
      <Navbar />
      <Meme />
  */} 
    </div>
  );
}

export default App;

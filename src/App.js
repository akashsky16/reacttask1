import './App.css';
import { Header } from './MyComponents/Header';
import { Left } from './MyComponents/Left';
import Right from './MyComponents/Right';

function App() {
  return (
    <>
    <Header />
    <div style={{display:"flex", marginLeft:"30%"}}>
    <Left />
    <Right />
    </div>
    </>
  );
}

export default App;

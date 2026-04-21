import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cont } from './components/Contianer/Cont';
import { Skills } from './components/Skills/Skills';
 
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Cont />
      <Skills />
      
    
    </div>
  );
}

export default App;

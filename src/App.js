import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cont } from './components/Contianer/Cont';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Project/Projects';
 
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Cont />
      <Skills />
      <Projects />
      
    
    </div>
  );
}

export default App;

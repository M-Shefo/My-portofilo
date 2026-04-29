import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cont } from './components/Contianer/Cont';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Project/Projects';
import { Contact } from './components/Contact/Contact';
import { Newsletter } from './components/Newsletter/NewsLetter';
import { Footer } from './components/Footer/Footer';
 
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Cont />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
      
    
    </div>
  );
}

export default App;

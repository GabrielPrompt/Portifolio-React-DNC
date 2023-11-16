import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Footer from './componentes/section/Footer';
import Skills from './componentes/section/Skills';
import Projets from './componentes/section/Projets';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Skills />
      <Projets />
      <Footer />
    </div>
  );
}

export default App;

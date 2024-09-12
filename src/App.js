import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Portofolio from './components/Portofolio';
import Skills from './components/Skills';
import './main.scss';

function App() {
  return (
    <>
    <Header />
    <About />
    <Skills />
    <Portofolio />
    <ContactForm />
    <Footer />
    </>
  );
}

export default App;

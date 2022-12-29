import './App.css';
import HomePage from './components/homePage';
import About from './components/about';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Header from './components/navbar';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import HomePage from './components/homePage';
import About from './components/about';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

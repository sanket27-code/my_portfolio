import './App.css';
import Projects from './Components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import AllComponents from './AllComponents';
import Contact from './Components/ContactMe/Contact';
import About from './Components/AboutMe/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AllComponents/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;

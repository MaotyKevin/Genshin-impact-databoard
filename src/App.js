
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './pages/header';
import Caracter from './components/cardList';
import CardDetails from './components/cardDetails';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/caracter' element={<Caracter />} />
        <Route path='/card/:id' element={<CardDetails />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

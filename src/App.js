//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home';
import Header from './pages/header';
import Caracter from './components/cardList';
import CardDetails from './components/cardDetails';
import ArtefactList from './components/artefactList';
import ArtefactDetails from './components/artefactDetails';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/caracter' element={<Caracter />} />
        <Route path='/artefact' element={<ArtefactList />} />
        <Route path='/card/:id' element={<CardDetails />} />
        <Route path='/artefact/:id' element={<ArtefactDetails />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

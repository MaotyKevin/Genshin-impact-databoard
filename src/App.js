import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './pages/header';

const Home = lazy(() => import('./pages/home'));
const CharacterList = lazy(() => import('./components/cardList'));
const CharacterDetails = lazy(() => import('./components/cardDetails'));
const ArtifactList = lazy(() => import('./components/artefactList'));
const ArtifactDetails = lazy(() => import('./components/artefactDetails'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="loading-state">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/artifacts" element={<ArtifactList />} />
          <Route path="/artifacts/:id" element={<ArtifactDetails />} />

          {/* Backward-compatible aliases for existing links */}
          <Route path="/caracter" element={<Navigate to="/characters" replace />} />
          <Route path="/artefact" element={<Navigate to="/artifacts" replace />} />
          <Route path="/card/:id" element={<CharacterDetails />} />
          <Route path="/artefact/:id" element={<ArtifactDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './pages/header';

const Home = lazy(() => import('./pages/home'));
const CharacterList = lazy(() => import('./features/characters/CharacterList'));
const CharacterDetails = lazy(() => import('./features/characters/CharacterDetails'));
const ArtifactList = lazy(() => import('./features/artifacts/ArtifactList'));
const ArtifactDetails = lazy(() => import('./features/artifacts/ArtifactDetails'));
const TeamBuilder = lazy(() => import('./features/teamBuilder/TeamBuilder'));

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
          <Route path="/team-builder" element={<TeamBuilder />} />

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
import React, { Suspense, lazy } from 'react'; 
import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoadingSpinner from './components/common/LoadingSpinner'; 
import { PokemonProvider } from './context/PokemonContext'; 


// **Patrón: Route-based Code Splitting**
// Aquí utilizamos `React.lazy` para cargar los componentes de las rutas de manera diferida.
// Esto significa que los componentes solo se descargarán cuando el usuario visite esa ruta específica.
// Ventaja: Mejora el rendimiento inicial al reducir el tamaño del bundle principal.
const HomePage = lazy(() => import('./pages/HomePage')); 
const PokemonDetailPage = lazy(() => import('./pages/PokemonDetailPage')); 

function App() {
  return (
   
    <Router>
      
      <PokemonProvider>
        <div className="app-container">
         
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} /> 
              <Route path="/pokemon/:id" element={<PokemonDetailPage />} /> 
            </Routes>
          </Suspense>
        </div>
      </PokemonProvider>
    </Router>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import LandingPage from './components/pages/LandingPage';
import AboutPage from './components/pages/AboutPage';
import PricingPage from './components/pages/PricingPage';
import Model3dPage from './components/pages/Model3dPage';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/3dmodel' element={<Model3dPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

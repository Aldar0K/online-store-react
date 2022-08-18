import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/Products' element={ <ProductsPage /> } />
        <Route path='/About' element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;

import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={ <ProductsPage /> } />
          <Route path='/About' element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;

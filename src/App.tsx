import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route path='/Products' element={ <ProductsPage /> } />
        <Route path='/About' element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;

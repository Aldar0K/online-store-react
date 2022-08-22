import './styles/reset.css';
import './styles/global.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ModalState } from './context/ModalContext';
import { AuthState } from './context/AuthContext';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <ModalState>
      <AuthState>
        <App />
      </AuthState>
    </ModalState>
  </BrowserRouter>
);

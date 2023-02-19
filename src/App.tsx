import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './UI/navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContextProvider } from './context/AuthContext';
import './styles/App.css';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

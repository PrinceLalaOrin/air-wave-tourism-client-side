import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import RoutingList from './pages/RoutingList/RoutingList';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
           <Header/>
            <RoutingList/>
           <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

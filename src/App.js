import './App.css';
import './indexx.css'
import Home from './Componentes/Home';
import Login from './Componentes/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">



        <Router>
          <div className="App">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;

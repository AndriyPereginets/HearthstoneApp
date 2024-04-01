import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import GetCards from './components/getCards/getCards';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Path from './pages/Path';


import './App.css';

function App() {

  return (
  
    <Router>
      <div className="App">
          <Header/>
          <Routes>
              <Route path="/" element={<GetCards/>}/>
              <Route path="/filter/:category" element={<Path/>}/>
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;

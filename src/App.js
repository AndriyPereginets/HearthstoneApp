import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import GetCards from './components/getCards/getCards';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Ability from './pages/ability';


import './App.css';



function App() {

  return (
  
    <Router>
      <div className="App">
          <Header/>
          <Routes>
              <Route path="/" element={<GetCards/>}/>
              <Route path="/filter/:category" element={<Ability/>}/>
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;

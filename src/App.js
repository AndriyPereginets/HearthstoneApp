import GetCards from './components/getCards/getCards';
import Header from './components/header/header';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='main'> <GetCards/> 
      <aside>
      </aside>
      </div>      
    </div>
  );
}

export default App;

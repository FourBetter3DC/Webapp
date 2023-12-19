import TextDisplay from './components/TextDisplay.js';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SavedWords from './pages/Savedwords';
import Accountpage from './pages/Accountpage';
import Settingpage from './pages/Settingpage';
import Exercisepage from './pages/Exercises';


function App() {
  return (
    <div>
      <p><Navbar /></p>
        <Routes>
          <Route path="/" exact element={<Homepage />}/>
          <Route path="/savedwords" exact element={<SavedWords />}/>
          <Route path="/account" exact element={<Accountpage />}/>
          <Route path="/settings" exact element={<Settingpage/>}/>
          <Route path="/exercises" exact element={<Exercisepage />}/>
        </Routes>
    </div>
  );
}

export default App;

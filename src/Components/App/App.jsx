import './App.scss';
import ModalGreetings from './ModalGreetings/ModalGreetings';
import ModalСharacterCreation from './ModalСharacterCreation/ModalСharacterCreation';
import OptionsMenu from './Interface/OptionsMenu/OptionsMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header/Header';

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <div className="App">
        <div className='App-content content'>
          <Router>
            <Routes>
              <Route exact path='/' element={<ModalGreetings />} />
              <Route path='/characterCreation' element={<ModalСharacterCreation />} />
              <Route path='/optionsMenu' element={<OptionsMenu />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  )
};
export default App;

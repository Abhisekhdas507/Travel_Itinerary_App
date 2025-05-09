import './App.css';
import { Route,Routes } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import MainDashboard from './pages/MainDashboard';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Onboarding/>}/>
      <Route path='/mainDashboard' element={<MainDashboard/>} />
    </Routes>
   </div>
  );
}

export default App;

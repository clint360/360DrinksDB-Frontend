import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Landing/LandingPage';
import LogIn from './LoginSignUp/LogIn';
import SignUp from './LoginSignUp/SignUp';
import Explore from './Landing/LandingNav/Explore';
import APIDocs from './Landing/LandingNav/APIDocs';
import Profile from './Pages/Profile';
import Drinks from './Pages/Drinks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/api-docs' element={<APIDocs />} />
        <Route path='/admin'>
          <Route path='/admin/profile'  element={<Profile />} />
          <Route path='/admin/drinks'  element={<Drinks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

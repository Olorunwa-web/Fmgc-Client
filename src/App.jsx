import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import OurBrand from './Pages/OurBrand';
import PasswordReset from './Auth/PasswordReset';
import Confirmation from './Auth/Confirmation';
import Allbrands from './Pages/Allbrands';
import Hygiene from './Pages/Hygiene';
import Beauty from './Pages/Beauty';
import Baby from './Pages/Baby';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/reset-password" element={<PasswordReset />} />
          <Route path='/auth/reset-password/confirmed' element={<Confirmation />} />
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />}>
              <Route path = '/home/allbrands' element = {<Allbrands/>}/>
              <Route path = '/home/hygiene' element = {<Hygiene/>}/>
              <Route path = '/home/beauty' element = {<Beauty/>}/>
              <Route path = '/home/baby' element = {<Baby/>}/>
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourbrand" element={<OurBrand />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
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
import Otherbrand from './Pages/Otherbrand';
import './App.css'
// import SetNewPassword from './Auth/setNewPassword';
import ForgotPasswordPage from "./Auth/ForgotPasswordPage";
import SetPassword from './Auth/SetPassword';
import Footer from './Components/Footer';
import ScrollTop from './Components/ScrollTop'



function App() {

  return (
    <>
      <BrowserRouter>
       <ScrollTop/>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/reset-password" element={<PasswordReset />} />
          <Route
            path="/auth/reset-password/confirmed"
            element={<Confirmation />}
          />
          {/* <Route path="/reset-password/:token" element={<SetNewPassword />} /> */}
          <Route path="/auth/forgotpassword" element={<ForgotPasswordPage />} />
          <Route
            // path="/auth/password-reset"
            path="/reset-password/:token"
            element={<SetPassword />}
          />
          <Route element={<Navbar />}>
            <Route path="/"  element={<Home />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route  path="/ourbrand" element={<OurBrand />}>
               <Route path="/ourbrand/allbrands" element={<Allbrands />}/>
               <Route path="/ourbrand/hygiene" element={<Hygiene />} />
               <Route path="/ourbrand/beauty" element={<Beauty />} />
               <Route path="/ourbrand/baby" element={<Baby />} />
               <Route path="/ourbrand/otherbrand" element={<Otherbrand/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

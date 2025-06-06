import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "../src/Auth/context/AuthContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="472584517231-sga4s8bg3p29vsp45cbn9jpf6nl7r9p5.apps.googleusercontent.com">
     <AuthProvider>
      <App />
     </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);

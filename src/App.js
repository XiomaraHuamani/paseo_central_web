import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

import Ruleta from "./pages/Ruleta";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Ruleta" element={<Ruleta />} />
          </Routes>
        </Router>

      </AuthProvider>
    </>
  );
}

export default App;

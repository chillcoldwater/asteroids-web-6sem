import "./App.css";
import { AsteroidsPage } from "./pages/AsteroidsPage";
import { AsteroidPage } from "./pages/AsteroidPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { DestroymentPage } from "./pages/DestroymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AsteroidsPage />} />
        <Route path="/destroyment" element={<DestroymentPage/>} />
        <Route path="asteroids/:asteroidId" element={<AsteroidPage/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

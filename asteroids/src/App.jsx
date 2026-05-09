import "./App.css";
import { AsteroidsPage } from "./pages/AsteroidsPage";
import { AsteroidPage } from "./pages/AsteroidPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { DestroymentPage } from "./pages/DestroymentPage";
import { ActionProvider } from "./ActionContext";

function App() {
  return (
    <ActionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AsteroidsPage />} />
          <Route path="/destroyment" element={<DestroymentPage />} />
          <Route path="asteroids/:asteroidId" element={<AsteroidPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ActionProvider>
  );
}

export default App;

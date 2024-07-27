import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

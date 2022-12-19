import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="App dark:bg-gray-800">
      <BrowserRouter>
        <Navbar />
        <div>
          <SettingsPage />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

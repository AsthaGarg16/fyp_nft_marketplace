import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import ExplorePage from "./pages/ExplorePage";
import StatPage from "./pages/StatPage";
import CreatePage from "./pages/CreatePage";
import CollectionPage from "./pages/CollectionPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="App dark:bg-gray-800">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/stat" element={<StatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/collection" element={<CollectionPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

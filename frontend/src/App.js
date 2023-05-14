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
import UnlistedItemPage from "./pages/UnlistedItemPage";
import MyCollection from "./pages/MyCollections";
import CreateCollection from "./pages/CreateCollection";
import ListPage from "./pages/ListPage";

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
            <Route path="/item" element={<ItemPage />} />
            <Route path="/unlisted-item" element={<UnlistedItemPage />} />
            <Route path="/my-collections" element={<MyCollection />} />
            <Route path="/create-collection" element={<CreateCollection />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

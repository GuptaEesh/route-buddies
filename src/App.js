import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer, NavBar } from "./components";
import { RedirectsAuth, RequiresAuth } from "./router";
import {
  Home,
  UserRegistration,
  Explore,
  Settings,
  MatchProfile,
  Chat,
  Matches,
} from "./screen";

function App() {
  const location = useLocation();
  const route = location.pathname === "/";
  return (
    <div className="App">
      {!route && <NavBar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" exact element={<Home />} />
        {/* Private Routes */}

        <Route element={<RedirectsAuth />}>
          <Route path="/registration" element={<UserRegistration />} />
        </Route>

        <Route element={<RequiresAuth />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:id" element={<MatchProfile />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      {!route && <Footer />}
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
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
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Routes>
        {/* Public Routes */}

        <Route element={<RedirectsAuth />}>
          <Route path="/" exact element={<Home />} />
        </Route>

        {/* Private Routes */}

        <Route element={<RequiresAuth />}>
          <Route path="/registration" element={<UserRegistration />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:id" element={<MatchProfile />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

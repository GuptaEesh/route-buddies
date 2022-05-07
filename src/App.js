import { Route, Routes } from "react-router-dom";
import "./App.css";
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
    <div className="App">
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
    </div>
  );
}

export default App;

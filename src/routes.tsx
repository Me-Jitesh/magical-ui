import { BrowserRouter, Routes, Route } from "react-router-dom";
import RichTextEditor from "./components/RichTextEditor";
import Profile from "./components/Profile";
import Home, { Dashboard } from "./components/Home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<RichTextEditor />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

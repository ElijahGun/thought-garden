import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ThoughtsPage from "./pages/thoughts/thoughts-page";
import SearchPage from "./pages/search/search-page";
import CreatePage from "./pages/create/create-page";
import NavBar from "./components/navbar/navbar";
import { ThoughtDetail } from "./pages/thoughtDetail/thoughtDetail";
import { ThemeButtons } from "./components/ThemeButtons/themeButtons";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ThemeButtons/>
      <Routes>
        <Route index path="/" element={<ThoughtsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="thoughts/:id" element={<ThoughtDetail/>}  />
      </Routes>
    </div>
  );
}

export default App;

import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ThoughtsPage from "./pages/thoughts/thoughts-page";
import SearchPage from "./pages/search/search-page";
import CreatePage from "./pages/create/create-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<ThoughtsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="create" element={<CreatePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

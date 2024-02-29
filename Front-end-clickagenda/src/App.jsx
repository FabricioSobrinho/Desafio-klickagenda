import Navbar from "./layouts/components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateTimePage from "./pages/CreateTimePage";
import ShowTimesPage from "./pages/ShowTimesPage";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateTimePage />} />
          <Route path="/horarios" element={<ShowTimesPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

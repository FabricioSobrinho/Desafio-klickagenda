import Navbar from "./layouts/components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateTimePage from "./pages/CreateTimePage";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateTimePage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

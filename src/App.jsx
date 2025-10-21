import { Routes, Route } from "react-router-dom";
import Landing from './views/landing.jsx';
import Homepage from './views/homepage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}

export default App;

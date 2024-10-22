import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import HeroCards from './components/HeroCards';
import Matches from './pages/Matches';
import Items from './pages/Items';


export function App() {
  return (
    <Router>
      <div className="w-full">
      <Navbar />
      </div>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<HeroCards />} />
          <Route path="/items" element={<Items />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </div>
    </Router>
  );
}

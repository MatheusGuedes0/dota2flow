import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import HeroCards from './components/HeroCards';
import {Matches} from './pages/Matches';
import Items from './pages/Items';
import { MatchList } from './components/MatchList';


export function App() {
  return (
    <Router>
      <div className="w-full">
      <Navbar />
      </div>
      <div className="p-6">
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/heroes" element={<HeroCards />} />
          <Route path="/items" element={<Items />} />
          <Route path="/matches" element={<MatchList />} />
          <Route path="/matches/:matchId" element={<Matches />} />
        </Routes>
      </div>
    </Router>
  );
}

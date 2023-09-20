import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import UsaEbayCalculatorPage from './pages/UsaEbayCalculatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/usa-ebay-calculator" element={<UsaEbayCalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

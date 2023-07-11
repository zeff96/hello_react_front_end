import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './components/greetings';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greetings />} />
      </Routes>
    </Router>
  );
}

export default App;

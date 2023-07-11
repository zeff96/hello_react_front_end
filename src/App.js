import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greetings />}/>
      </Routes>
    </Router>
  );
}

export default App;

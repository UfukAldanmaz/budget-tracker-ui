
import './App.css';
import Registration from './Registration';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Registration />} />

          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;

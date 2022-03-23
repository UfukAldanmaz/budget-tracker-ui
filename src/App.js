
import Registration from './pages/auth/Registration';
import Login from './pages/auth/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewExpense from './pages/expense/NewExpense';


function App() {

  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newexpense" element={<NewExpense />
          } />


        </Routes>
      </div>
    </Router>
  )


}

export default App;

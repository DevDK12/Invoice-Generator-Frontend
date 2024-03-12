import { Routes, Route} from 'react-router-dom';





import Login from './pages/auth/login';
import Signup from './pages/auth/signup';






const App = () => {


  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route index element={<p>This is home page</p>} />

    </Routes>
  )
}



export default App
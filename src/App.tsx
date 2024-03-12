import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';





import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Layout from './components/Layout/Layout';


const Home = lazy(() => import('./pages/home'));
const Addproduct =  lazy(() => import('./pages/add-product'));





const App = () => {


  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/add-product' element={<Addproduct />} />
      </Route>


    </Routes>
  )
}



export default App
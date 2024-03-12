import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { IUserReducerInitialState } from './types/user-types';
import { deleteUser } from './redux/reducer/user-slice';


import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Layout from './components/Layout/Layout';



const Home = lazy(() => import('./pages/home'));
const Addproduct = lazy(() => import('./pages/add-product'));





const App = () => {


  const dispatch = useDispatch();

  const { loading: userLoaidng, user } = useSelector((state: { userSlice: IUserReducerInitialState }) => state.userSlice);

  useEffect(() => {


    dispatch(deleteUser());

  }, [dispatch])


  const isLoggedIn = user ? true : false;


  if (userLoaidng)
    return <div className='h-screen w-screen title grid place-items-center'>Loading user...</div>;









  return (
    <Routes>

      <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
      <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to='/' />} />



      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/add-product' element={!isLoggedIn ? <Addproduct /> : <Navigate to='/' />} />
      </Route>


    </Routes>
  )
}



export default App
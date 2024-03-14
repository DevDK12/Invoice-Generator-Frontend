import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { IUserReducerInitialState } from './types/user-types';
import { deleteUser, saveUser } from './redux/reducer/user-slice';


import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Layout from './components/Layout/Layout';

import toast from 'react-hot-toast';



const Home = lazy(() => import('./pages/home'));
const Addproduct = lazy(() => import('./pages/add-product'));
const Cart =  lazy(() => import('./pages/cart'));





const App = () => {


  const dispatch = useDispatch();

  const { loading: userLoaidng, user } = useSelector((state: { userSlice: IUserReducerInitialState }) => state.userSlice);



  useEffect(() => {

    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);

      dispatch(saveUser(user));
      const expiry = new Date(user.expiry).getTime() - new Date().getTime();

      const timer = setTimeout(() => {
        dispatch(deleteUser());
        localStorage.clear();
        toast.success('Login session expired');
        clearTimeout(timer);
      }, expiry);

    }
    else {
      dispatch(deleteUser());
    }

  }, [dispatch])




  if (userLoaidng)
    return <div className='h-screen w-screen title grid place-items-center'>Loading user...</div>;





  const isLoggedIn = user ? true : false;




  return (
    <Routes>

      <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to='/' />} />
      <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to='/' />} />



      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/add-product' element={isLoggedIn ? <Addproduct /> : <Navigate to='/login' />} />
        <Route path='/cart' element={isLoggedIn ? <Cart /> : <Navigate to='/login' />} />
      </Route>

    </Routes>
  )
}



export default App
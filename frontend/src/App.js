// import logo from './logo.svg';
// import './App.css';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import SummaryApi from './common';
// import Context from './context';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from './store/userSlice';

// function App() {
//   const dispatch = useDispatch()
//   const [cartProductCount, setCartProductCount] = useState(0)

//   const fetchUserDetails = async () => {
//     const dataResponse = await fetch(SummaryApi.current_user.url, {
//       method: SummaryApi.current_user.method,
//       credentials: 'include'
//     })

//     const dataApi = await dataResponse.json()
//     console.log('dataApi', dataApi)
//     localStorage.setItem('token', dataApi.data)

//     if (dataApi.success) {
//       console.log('fetching u d')
//       dispatch(setUserDetails(dataApi.data))
//     }
//     else {
//       console.log('unable to fetch u d')
//     }
//   }

//   const fetchUserAddToCart = async () => {
//     const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
//       method: SummaryApi.addToCartProductCount.method,
//       credentials: 'include'
//     })

//     const dataApi = await dataResponse.json()

//     setCartProductCount(dataApi?.data?.count)
//   }

//   useEffect(() => {
//     /**user Details */
//     fetchUserDetails()
//     /**user Details cart product */
//     fetchUserAddToCart()

//   }, [])
//   return (
//     <>
//       <Context.Provider value={{
//         fetchUserDetails, // user detail fetch 

//         cartProductCount, // current user add to cart product count,
//         fetchUserAddToCart
//       }}>
//         <ToastContainer
//           position='top-center'
//         />

//         <Header />
//         <main className='min-h-[calc(100vh-120px)] pt-16'>
//           <Outlet />
//         </main>
//         <Footer />
//       </Context.Provider>
//     </>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import SummaryApi from './common';
// import Context from './context';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from './store/userSlice';

// function App() {
//   const dispatch = useDispatch()
//   const [cartProductCount, setCartProductCount] = useState(0)

//   const fetchUserDetails = async () => {
//     // const token = dataApi.data
//     // console.log('tkn app.js', token)
//     // document.cookie = `token=${token}; path=/; Secure`;
//     const dataResponse = await fetch(SummaryApi.current_user.url, {
//       method: SummaryApi.current_user.method,
//       credentials: 'include'
//     })

//     const dataApi = await dataResponse.json()

//     if (dataApi.success) {
//       dispatch(setUserDetails(dataApi.data))
//     }
//   }

//   const fetchUserAddToCart = async () => {
//     const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
//       method: SummaryApi.addToCartProductCount.method,
//       credentials: 'include'
//     })

//     const dataApi = await dataResponse.json()

//     setCartProductCount(dataApi?.data?.count)
//   }

//   useEffect(() => {

//     /**user Details */
//     fetchUserDetails()
//     /**user Details cart product */
//     fetchUserAddToCart()

//   }, [])
//   return (
//     <>
//       <Context.Provider value={{
//         fetchUserDetails, // user detail fetch 
//         cartProductCount, // current user add to cart product count,
//         fetchUserAddToCart
//       }}>
//         <ToastContainer
//           position='top-center'
//         />

//         <Header />
//         <main className='min-h-[calc(100vh-120px)] pt-16'>
//           <Outlet />
//         </main>
//         <Footer />
//       </Context.Provider>
//     </>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const [cartProductCount, setCartProductCount] = useState(0)
  axios.defaults.withCredentials = true;
  // const fetchUserDetails = async () => {
  //   const dataResponse = await fetch(SummaryApi.current_user.url, {
  //     method: SummaryApi.current_user.method,
  //     credentials: 'include'
  //   })

  //   const dataApi = await dataResponse.json()
  //   console.log('fetch u d dataapi', dataApi)

  //   if (dataApi.success) {
  //     dispatch(setUserDetails(dataApi.data))
  //   }
  // }
  const token = localStorage.getItem('token')
  console.log('tooook', token)
  const fetchUserDetails = async () => {
    const dataResponse = await axios.get(SummaryApi.current_user.url, //{ withCredentials: true }
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )


    const dataApi = await dataResponse.json()
    console.log('fetch u d dataapi', dataApi)

    if (dataResponse.data.success) {
      dispatch(setUserDetails(dataResponse.data))
    }
  }

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()

    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(() => {
    /**user Details */
    fetchUserDetails()
    /**user Details cart product */
    fetchUserAddToCart()

  }, [])
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails, // user detail fetch 
        cartProductCount, // current user add to cart product count,
        fetchUserAddToCart
      }}>
        <ToastContainer
          position='top-center'
        />

        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;

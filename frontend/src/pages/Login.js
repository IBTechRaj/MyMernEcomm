// import React, { useContext, useState } from 'react'
// import loginIcons from '../assest/signin.gif'
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from 'react-router-dom';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';
// import Context from '../context';
// import { LiaCookieSolid } from 'react-icons/lia';

// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false)
//     const [data, setData] = useState({
//         email: "",
//         password: ""
//     })
//     const navigate = useNavigate()
//     const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

//     const handleOnChange = (e) => {
//         const { name, value } = e.target

//         setData((preve) => {
//             return {
//                 ...preve,
//                 [name]: value
//             }
//         })
//     }


//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         console.log('here')
//         console.log('url ', SummaryApi.signIn.url)
//         console.log('d', data)
//         const dataResponse = await fetch(SummaryApi.signIn.url, {
//             method: SummaryApi.signIn.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })

//         const dataApi = await dataResponse.json()
//         console.log('data Api', dataApi)

//         if (dataApi.success) {
//             toast.success(dataApi.message)

//             localStorage.setItem('token', dataApi.data)
//             navigate('/')
//             fetchUserDetails()
//             console.log('fud', fetchUserDetails())
//             fetchUserAddToCart()
//         }

//         if (dataApi.error) {
//             toast.error(dataApi.message)
//             console.log('da err', dataApi.error)
//         }
//         console.log("data login", data)
//     }



//     return (
//         <section id='login'>
//             <div className='mx-auto container p-4'>

//                 <div className='bg-white p-5 w-full max-w-sm mx-auto'>
//                     <div className='w-20 h-20 mx-auto'>
//                         <img src={loginIcons} alt='login icons' />
//                     </div>

//                     <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
//                         <div className='grid'>
//                             <label>Email : </label>
//                             <div className='bg-slate-100 p-2'>
//                                 <input
//                                     type='email'
//                                     placeholder='enter email'
//                                     name='email'
//                                     value={data.email}
//                                     onChange={handleOnChange}
//                                     className='w-full h-full outline-none bg-transparent' />
//                             </div>
//                         </div>

//                         <div>
//                             <label>Password : </label>
//                             <div className='bg-slate-100 p-2 flex'>
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder='enter password'
//                                     value={data.password}
//                                     name='password'
//                                     onChange={handleOnChange}
//                                     className='w-full h-full outline-none bg-transparent' />
//                                 <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
//                                     <span>
//                                         {
//                                             showPassword ? (
//                                                 <FaEyeSlash />
//                                             )
//                                                 :
//                                                 (
//                                                     <FaEye />
//                                                 )
//                                         }
//                                     </span>
//                                 </div>
//                             </div>
//                             <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
//                                 Forgot password ?
//                             </Link>
//                         </div>

//                         <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

//                     </form>

//                     <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
//                 </div>


//             </div>
//         </section>
//     )
// }

// export default Login



// import React, { useContext, useState } from 'react'
// import loginIcons from '../assest/signin.gif'
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from 'react-router-dom';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';
// import Context from '../context';

// import axios from 'axios';

// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false)
//     const [data, setData] = useState({
//         email: "",
//         password: ""
//     })
//     const navigate = useNavigate()
//     const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

//     const handleOnChange = (e) => {
//         const { name, value } = e.target

//         setData((preve) => {
//             return {
//                 ...preve,
//                 [name]: value
//             }
//         })
//     }


//     const handleSubmit = async (e) => {
//         e.preventDefault()


//         const dataResponse = await fetch(SummaryApi.signIn.url, {
//             method: SummaryApi.signIn.method,
//             credentials: 'include',
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })

//         const dataApi = await dataResponse.json()
//         console.log('data Api', dataApi)

//         const token = dataApi.data
//         console.log('tkn', token)
//         document.cookie = `token=${token}; path=/; Secure; SameSite=None`;
//         if (dataApi.success) {
//             toast.success(dataApi.message)
//             navigate('/')
//             fetchUserDetails()
//             fetchUserAddToCart()
//         }

//         if (dataApi.error) {
//             toast.error(dataApi.message)
//         }

//     }

//     console.log("data login", data)

//     return (
//         <section id='login'>
//             <div className='mx-auto container p-4'>

//                 <div className='bg-white p-5 w-full max-w-sm mx-auto'>
//                     <div className='w-20 h-20 mx-auto'>
//                         <img src={loginIcons} alt='login icons' />
//                     </div>

//                     <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
//                         <div className='grid'>
//                             <label>Email : </label>
//                             <div className='bg-slate-100 p-2'>
//                                 <input
//                                     type='email'
//                                     placeholder='enter email'
//                                     name='email'
//                                     value={data.email}
//                                     onChange={handleOnChange}
//                                     className='w-full h-full outline-none bg-transparent' />
//                             </div>
//                         </div>

//                         <div>
//                             <label>Password : </label>
//                             <div className='bg-slate-100 p-2 flex'>
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder='enter password'
//                                     value={data.password}
//                                     name='password'
//                                     onChange={handleOnChange}
//                                     className='w-full h-full outline-none bg-transparent' />
//                                 <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
//                                     <span>
//                                         {
//                                             showPassword ? (
//                                                 <FaEyeSlash />
//                                             )
//                                                 :
//                                                 (
//                                                     <FaEye />
//                                                 )
//                                         }
//                                     </span>
//                                 </div>
//                             </div>
//                             <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
//                                 Forgot password ?
//                             </Link>
//                         </div>

//                         <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

//                     </form>

//                     <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
//                 </div>


//             </div>
//         </section>
//     )
// }

// export default Login

//****** using axios  */
import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

import axios from 'axios';
const Login = () => {


    axios.defaults.withCredentials = true;
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('e p', data.email, data.password)
        const dataResponse = await axios.post(SummaryApi.signIn.url, { email: data.email, password: data.password }, { withCredentials: true });

        // const dataResponse = await fetch(SummaryApi.signIn.url, {
        //     method: SummaryApi.signIn.method,
        //     credentials: 'include',
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })

        console.log('dr', dataResponse)
        localStorage.setItem('token', dataResponse.data.data)
        if (dataResponse.data.success) {
            toast.success(dataResponse.data.message)
            navigate('/')
            fetchUserDetails()
            fetchUserAddToCart()
        }

        // const dataApi = await dataResponse.json()

        // if (dataApi.success) {
        //     toast.success(dataApi.message)
        //     navigate('/')
        //     fetchUserDetails()
        //     fetchUserAddToCart()
        // }

        if (dataResponse.data.error) {
            toast.error(dataResponse.data.message)
        }

    }

    console.log("data login", data)

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>

                <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='enter password'
                                    value={data.password}
                                    name='password'
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                    </form>

                    <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                </div>


            </div>
        </section>
    )
}

export default Login
// "use client"
// import {usestate } from "react"
// export default function form(){
//     const[name,setName]=usestate("")
//     return(

//         <div>
//         <h2>Registration form</h2>
//         <input type="text" 
//         value={name}
//         placeholder="enter your name"
//        onChange={() =>{setName(e.target.value)}}
//        />
//         </div>
//     )
// }

// "use client"
// import {usestate}from "react"
// export default function form(){
//     const[name,setName]=usestate("")
//     const[email,setEmail]=usestate("")
//     function handlesubmit(){
//         alert(`hello ${name}`)
//     }
//     return(

//         <div>
//         <h2>Registration form</h2>
//         <input type="text" 
//         value={name}
//         placeholder="enter your name"
//        onChange={() =>{setName(e.target.value)}}
//        />
//         </div>
//     )
// }


// "use client"

// import { useState } from "react"
// import "./style.css"

// export default function Page() {
//     const [isLogin, setIsLogin] = useState(false)

//     return (
//         <div className="container">

//             <div className="form-section">

//                 <h1>AFRIK-MUSIK</h1>
//                 <p>Explore African songs all in one band</p>

//                 <div className="top-buttons">
//                     <button
//                         className={!isLogin ? "active" : ""}
//                         onClick={() => setIsLogin(false)}
//                     >
//                         Sign Up
//                     </button>

//                     <button
//                         className={isLogin ? "active" : ""}
//                         onClick={() => setIsLogin(true)}
//                     >
//                         Login
//                     </button>
//                 </div>

//                 <p className="account">
//                     Sign up with open account
//                 </p>

//                 <div className="social-buttons">
//                     <button>f</button>
//                     <button>G</button>
//                     <button></button>
//                 </div>

//                 <div className="or">
//                     <span></span>
//                     <p>Or</p>
//                     <span></span>
//                 </div>

//                 {!isLogin ? (
//                     <>
//                         <label>Username</label>
//                         <input
//                             type="text"
//                             placeholder="ser name"
//                         />

//                         <label>Email</label>
//                         <input
//                             type="email"
//                             placeholder="email"
//                         />

//                         <label>Password</label>
//                         <input
//                             type="password"
//                             placeholder="********"
//                         />
//                     </>
//                 ) : (
//                     <>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                         />

//                         <label>Password</label>
//                         <input
//                             type="password"
//                             placeholder="Enter your password"
//                         />
//                     </>
//                 )}

//                 <div className="remember">
//                     <input type="checkbox" />
//                     <span>Remember me</span>
//                 </div>

//             </div>

//             <div className="image-section">
//                 <img src="/music.jpg" alt="Music" />
//             </div>

//         </div>
//     )
// }
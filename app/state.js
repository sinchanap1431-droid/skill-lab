// "use client"
// import{usestate} from "react"
// export default function state(){
//   //const[state,setstate]=usestate(initialstate)
//   const [count , setcount]=usestate(0)
//   function inc(){
//    setcount(count+1)
//   }
    
//     return(
//         <>
//            <h2>count:1</h2>
//            <button onClick={inc}>increase</button>
//         </>
        
//     )
// }

// //2.
// "use client"
// import{usestate} from "react"
// export default function state(){
//   //const[state,setstate]=usestate(initialstate)
//   const [text , setText]=usestate("hello")
//   function changeText(){
//    setText("Welcome to class")
//   }
    
//     return(
//         <>
//            <h2>{text}</h2>
//            <button onMouseOver={ChangeText}>ChangeText</button>
//         </>
        
//     )
// }

//3.
// "use client"
// import{usestate} from "react"
// export default function state(){
//   //const[state,setstate]=usestate(initialstate)
//   const [theme , setTheme]=usestate()
//   function lightTheme(){
//     setTheme()
//   }
//    function darkTheme(){
//      setTheme()
//   } 
//     return(
//         <>
//            <button onClick={lightTheme}>light Theme</button>
//            <button onClick={darkTheme}>Dark Theme</button>
//         </>
        
//     )
// }

"use client"
import { useState } from "react"

export default function State() {
    const [wishlist, setWishlist] = useState(false)

    function toggleWishlist() {
        setWishlist(!wishlist)
    }

    return (
        <>
            <h2>Product Wishlist</h2>

            <h3>Product: Wireless Headphones</h3>
            <p>Details: Bluetooth headphones with good sound quality.</p>
            <p>Price: ₹999</p>

            <button onClick={toggleWishlist}>
                {wishlist ? " Added to Wishlist" : " Add to Wishlist"}
            </button>

            <p>
                Current Wishlist Status: {wishlist ? "Added" : "Not Added"}
            </p>
        </>
    )
}
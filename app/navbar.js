// import Link from "next/link"
// export default function Navbar(){
//     return(
//         <div>
            
//               <nav className="bg-gray-400 p-2 flex gap-4 text-white"> 
//               <Link 
//                  href='/ Home '
//                  className="text-white hover: text-red-200">    Home    </Link>
//               <Link  
//                  href='/ about '
//                  className="text-white hover:text-red-300">     about   </Link>
//               <Link  
//                  href='/ contact '
//                  className="text-white hover:text-red-300">     contactme </Link>   
//               </nav>
            
//         </div >
//     )
// }
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-900 p-4 flex gap-8 text-white">
//       <Link href="/" className="hover:text-red-300">
//         Home
//       </Link>

//       <Link href="/about" className="hover:text-red-300">
//         About
//       </Link>

//       <Link href="/projects" className="hover:text-red-300">
//         Projects
//       </Link>

//       <Link href="/contact" className="hover:text-red-300">
//         Contact
//       </Link>
//     </nav>
//   );
// }


'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        &lt;YourName /&gt;
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  )
}
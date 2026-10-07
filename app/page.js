// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.js
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


//1.comp based struct

// import Image from "next/image"

// export default function page(){
//   const name="sinchana"
//   return(
//     <div>
//       <img
//       src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg"
//       alt="img"
//       height="100"
//       width="100"
//       />
//     <p>{name}</p>
//     <p>cont no:787576575</p>
//     <p>USN:4SF25CS199</p>
//     <p>add:Udupi</p>
//     </div>
//   )
// }

//2.
// export default function page(){
//   const price=50
//   const quantity=4
//   return(
//     <div>
//     <p>price:{price}</p>
//     <p>quantity:{quantity}</p>
//     <p>total:{price*quantity}</p>
//     </div>
//   )
// }


//3.
// function Home(){
//   return(
//     <p>Hello</p>
//   )
// }
// export default function page(){
//   return(
//     <div>
//       <Home/> 
//     </div>
//   )
// }


//4.
// function user(){
//   return(
//     <p>Hello sinchana</p>
//   )
// }

// function user1(){
//   return(
//     <p>Hello spandana</p>
//   )
// }
// export default function page(){
//   return(
//     <div>
//       <user/> 
//       <user1/>
//     </div>
//   )
// }

//props :props are argument passed into react components.Props are passed to components via html attributes.props stand for properties.

//5.
// function User(props)
// {
//   return(
//     <p>hello {props.name}</p>
//   )
// }

// export default function page(){
//   return(
//     <div>
//     <User name="Sinchana"/>
//     </div>
//   )
// }


//6.
// function User(props)
// {
//   return(
//     <p>hello {props.name}</p>
//   )
// }

// export default function page(){
//   return(
//     <div>
//     <User name="Sinchana"/>
//     <User name="Spandan"/>
//     <User name="aBC"/>
//     </div>
//   )
//}


//7.
// function User(props)
// {
//   return(
//     <>
//     <p>hello {props.name}</p>
//     <p> my age:{props.age}</p>
//     <p> my email:{props.email}</p>
//     </>
//   )
// }

// export default function page(){
//   return(
//     <div>
//     <User name="Sinchana" age="24" email="sinchanap@gmail.com"/>
//     <User name="Spandana" age="18" email="spandanap2gmail.com"/>
//     </div>
//   )
// }

//8.
// function User(name, age, email)
// {
//   return(
//     <>
//     <p>hello {name}</p>
//     <p> my age:{age}</p>
//     <p> my email:{email}</p>
//     </>
//   )
// }

// export default function page(){
//   return(
//     <div>
//     <User name="Sinchana" age="24" email="sinchanap@gmail.com"/>
//     <User name="Spandana" age="18" email="spandanap2gmail.com"/>
//     </div>
//   )
// }


//rendering lists:
//rendering a list:display multiple pieces of data from an array.

//9.
// const fruits=["apple","banana","orange"]
// fruits.map((fruit)=>{
//   console.log(fruit)
// });      check this in online compailer it doesn't work here

//10.
// export default function page(){
// const fruit=["apple","banana","orange"]
// return(
//   <div>
//     {fruit.map((fruit)=>(
//      <h3>{fruit}</h3>
//     ))}
//      </div>
// )
// }


//11.
// export default function page(){
// const student=[
// {id:"1",name:"sinchana", age:"19"},
// {id:"2",name:"suraksha", age:"18"},
// {id:"3",name:"spoorthi", age:"29"},
// ];
// return(
//   <div>
//     {student.map((student)=>(
//     <div key={student.id}>  
//      <h3>{student.name}</h3>
//      <p> Age:{student.age}</p>
//     </div>
//     ))}
//   </div>
// )
//}

//conditional operator

//12.
//function greeting({ isloggedin }) {
//let loggedin=false;
//return
//<h1> {isloggedin ? "welcome back!":"pleaze sign in"}
//</h1>;
//}

//ternary operator in js and conditional rendering
////props:try basic questions
//rendering lists
//map function in js and react compo


//activity:

// const conferenceData={
//     name:"React summit 2026",
//     maxCapacity:5,
    
//     attendees:[
//         {
//             id:1,
//             name:"Sinchana",
//             role:"speaker",
//             isCheckedIn:true,
//             isVIP:true
//         },
//         {
//             id:2,
//             name:"Spoorthi",
//             role:"attendee",
//             isCheckedIn:true,
//             isVIP:false,
//         },
//         {
//             id:3,
//             name:"Thanu",
//             role:"volunteer",
//             isCheckedIn:true,
//             isVIP:true,
//         },
//         {
//             id:4,
//             name:"Spoorthi",
//             role:"attendee",
//             isCheckedIn:true,
//             isVIP:false,
//         },
 //          {
//             id:5,
//             name:"Spandana",
//             role:"speaker",
//             isCheckedIn:false,
//             isVIP:true,
//         },
//     ]
//};
//function patrticipantcard({name,role,isCheckedIn,isVIP}){

//}



// }                   homework
//------------------------------------------------------------------------


//state management in react.js:
//hooks in react.js

// import form from './form'
// export default function home(){
//     return(
//         <>
//         <form />
//         </>
//     )
// }

// "use client"

// import { useState } from "react"
// import "./globals.css"

// export default function Page() {

//     const [isLogin, setIsLogin] = useState(false)

//     return (
//         <div className="container">

//             <div className="form-section">

//                 <h1>Melora</h1>
//                 <p>Where Vibes Come Alive</p>

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

//                 <div className="or">
//                     <span></span>
//                     <p>Or</p>
//                     <span></span>
//                 </div>

//                 {!isLogin ? (
//                     <>
//                         <label>First Name</label>
//                         <input
//                             type="text"
//                             placeholder="Enter your first name"
//                         />

//                         <label>Last Name</label>
//                         <input
//                             type="text"
//                             placeholder="Enter your last name"
//                         />

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
//                 <img src="https://i.pinimg.com/236x/c1/ec/6a/c1ec6a563cd33c1127c354881bd398df.jpg?nii=t"  />
//             </div>

//         </div>
//     )
// }

// import State from './state'
// import Form from './form'
// import Navbar from './navbar'
// export default function Home(){
//     return(
//         <div>
//             <Navbar/>
//             Welcome to home page
//         </div>
//     );
// }



import Navbar from './navbar'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="hero-intro">
              Hello, I'm
            </p>

            <h1>
               <span>Sinchana</span>
            </h1>

            <h2>
              Full Stack Developer
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly
              websites and applications using modern web
              technologies.
            </p>
            <div className="hero-buttons">
              <a
                href="#projects"
                className="button primary-button"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="button secondary-button"
              >
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:youremail@example.com">
                Email
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="glow-circle"></div>
            <div className="hero-image">
              <img
                src="/profile.jpg"
                alt="Your Name"
              />
            </div>
          </div>
        </section>
        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>
          <div className="about-container">
            <div className="about-text">
              <h3>
                Turning ideas into digital experiences.
              </h3>
              <p>
                I'm a passionate developer who enjoys creating
                modern websites and applications.
              </p>
              <p>
                I love learning new technologies and solving
                problems through clean and efficient code.
              </p>
              <p>
                My goal is to build applications that are not
                only functional but also enjoyable to use.
              </p>
            </div>
            <div className="about-cards">

              <div className="about-card">
                <h3>01</h3>
                <p>Clean Code</p>
              </div>

              <div className="about-card">
                <h3>02</h3>
                <p>Responsive Design</p>
              </div>

              <div className="about-card">
                <h3>03</h3>
                <p>Problem Solving</p>
              </div>

              <div className="about-card">
                <h3>04</h3>
                <p>Continuous Learning</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section id="skills" className="section skills-section">

          <div className="section-heading">

            <p>MY TECHNOLOGIES</p>

            <h2>
              My <span>Skills</span>
            </h2>

          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <span>01</span>
              <h3>HTML</h3>
              <p>Semantic and accessible web structure.</p>
            </div>

            <div className="skill-card">
              <span>02</span>
              <h3>CSS</h3>
              <p>Responsive and modern visual design.</p>
            </div>

            <div className="skill-card">
              <span>03</span>
              <h3>JavaScript</h3>
              <p>Interactive and dynamic applications.</p>
            </div>

            <div className="skill-card">
              <span>04</span>
              <h3>React</h3>
              <p>Reusable component-based interfaces.</p>
            </div>

            <div className="skill-card">
              <span>05</span>
              <h3>Next.js</h3>
              <p>Modern full-stack React applications.</p>
            </div>

            <div className="skill-card">
              <span>06</span>
              <h3>Node.js</h3>
              <p>Backend APIs and server-side applications.</p>
            </div>

            <div className="skill-card">
              <span>07</span>
              <h3>MongoDB</h3>
              <p>Database design and data management.</p>
            </div>

            <div className="skill-card">
              <span>08</span>
              <h3>Git</h3>
              <p>Version control and project collaboration.</p>
            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section">

          <div className="section-heading">

            <p>MY RECENT WORK</p>

            <h2>
              Featured <span>Projects</span>
            </h2>

          </div>


          <div className="projects-grid">

            <article className="project-card">

              <div className="project-number">
                01
              </div>

              <h3>
                E-Commerce Website
              </h3>

              <p>
                A responsive e-commerce website with product
                listings, shopping cart and modern user interface.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a href="#">
                View Project →
              </a>

            </article>


            <article className="project-card">

              <div className="project-number">
                02
              </div>

              <h3>
                Task Management App
              </h3>

              <p>
                A productivity application for managing tasks,
                deadlines and daily activities.
              </p>

              <div className="project-tags">
                <span>Next.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>

              <a href="#">
                View Project →
              </a>

            </article>


            <article className="project-card">

              <div className="project-number">
                03
              </div>

              <h3>
                Portfolio Website
              </h3>

              <p>
                A modern personal portfolio designed to showcase
                skills, projects and professional experience.
              </p>

              <div className="project-tags">
                <span>Next.js</span>
                <span>React</span>
                <span>CSS</span>
              </div>

              <a href="#">
                View Project →
              </a>

            </article>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section">

          <p className="contact-small">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's Work <span>Together.</span>
          </h2>

          <p className="contact-description">
            I'm always open to discussing new projects,
            creative ideas or opportunities.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="button primary-button"
          >
            Get In Touch
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Your Name. All rights reserved.
        </p>

      </footer>

    </>
  )
}
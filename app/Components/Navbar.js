"use client";
import{useContext} from"react";
import{userContext} from "../context/UserContext";
// import UserDetails from "./UserDetails";
export default function Navbar(){
    const {name} = useContext(userContext);
 return( 
 <>
  <h2>welcome </h2>
  </>
);
}
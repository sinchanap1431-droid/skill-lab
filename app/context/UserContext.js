"use client";
import{createContext,useState} from "react";
//create global context
export const UserContext=createContext();
export default function UserProvider({children}){
    canst[name,setName]=useState("sinchana");
    return(
        <UserContext.Provider value={{name,setName}}>
            
        </UserContext.Provider>
    )
}

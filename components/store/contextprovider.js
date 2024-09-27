import { useState } from "react";
import Mycontext from "./context";
import React from "react";






function StateProvider({children}) {

  
    let   [display , hidedisplay]  =  useState("hello world")
    let [userinterface , upuserinterface] = useState(1)
    let [mytext1 , updatemytext1] = useState(1)

    // this will use to store found result 


    let [founder , updatefound] = useState([])

let [Navelooks , updateNavelook] = useState( {width:"0%", height:"80%" , backgroundColor:"black" , justifyContent:"space-evenly"})


  

    return(
      <Mycontext.Provider   value={{display , hidedisplay , Navelooks , updateNavelook , userinterface , upuserinterface , mytext1 , updatemytext1 , founder , updatefound}}>

        {children}
      </Mycontext.Provider>


    )
}

export  default StateProvider;
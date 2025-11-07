import React from "react";
import logo from "../assets/images/logo.png"

function Header(){
    return(
        <header className="flex h-32 bg-black w-full">
            <img src={logo} 
            alt="web page logo" 
            className="w-32 h-32 "
            />
            <div className="container m-6 max-w-64">
            < h1 className="text-white"> Autonomous Environmental Reasoning & Intelligence System</h1>
            </div>


        </header>
    )
}

export default Header;
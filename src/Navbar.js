import { useState } from "react";
import { useEffect } from "react";
import Logo from "./logo.png";
import "./Navbar.css"
import React from "react";




function Navbar(){

    const t = React.createRef()

     
    

    let listener = null
    const [scrollState, setScrollState] = useState("top");
    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop
          if (scrolled >= 40 || window.pageYOffset !== 0) {
            console.log(window. pageYOffset)

            if (scrollState !== "amir") setScrollState("amir")
          } else {
            if (scrollState !== "top") setScrollState("top")
          }
        })
        return () => {
          document.removeEventListener("scroll", listener)
        }
      }, [scrollState])
    

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
    }, [isMobile]);


    const [isActive, setActive] = useState(false);
    
    
    function check(isMobile, isActive) {
        if(!isMobile) 
        {
            
     
                return "main_list";
        
        }

        else{
            if(isActive)
            {
                return "main_list";
            }

            else{
                return "show_list";
            }
        }
        return "main_list";
    }


    function check2(scrollState)
    {
        if(scrollState==='top')
        {return "container";}
        else
        {
            return ["scrolled", "visibile"];
        }
    }

    const scr=check2(scrollState)
    const name= check(isMobile, isActive);

    console.log(name)
    const toggleClass = () => {
        console.log("clicked");
        setActive(!isActive);
        console.log(isActive);
      };
    return(

        <nav className="nav" id={scr[0]}>
        <div className="container">
            <div className="logo" >
                <a href="#"></a>
               <img src={Logo} alt="logo of the lab" id="logo"></img>
            </div>
            <div id="mainListDiv" className={name} >
                <ul className="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#Research">Research</a></li>
                    <li><a href="#People">People</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span className="navTrigger" onClick={toggleClass}>
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>




    );
}


export default Navbar;

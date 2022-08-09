import logo from './logo.svg';
import './App.css';
import React from 'react';

import Navbar from "./Navbar";

import { useState } from "react";

import {useRef} from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



function App() {
 
  const h= window.innerHeight -80;
  const myRef={useRef}
    const goToTop = () => {
      console.log("clicked");
      window.scrollTo({top: window.innerHeight -80, left: 0, behavior: 'smooth'});
      // myRef.current.scrollIntoView() ;
  };

 

  return (
   <> 

    <div className="App">

        <section id="start"><React.Fragment><Navbar /></React.Fragment>


        <div id="text_on_top" style={{"all":"none", "font-size": "70px", margin:"0px", top:"200px", position:"relative"} }>
          welcome to  
       <span style={{color:"purple", display:"inline"}} > PERCEPTION </span> and <span style={{color:"orangered", display:"inline"}} >ACTIVE COGNITION</span > LAB
          </div>
        <div className="scroll"  onClick={goToTop}></div>



             <div className="scroll"  onClick={goToTop} style={{  bottom: "100px"}}></div>
  
            </section> 
        <section id="About" ref={myRef} >
          <AwesomeSlider className="pleasework"  style={{  height: "80vh"}}>
           

          <div  style={{overflow:"scroll"}}>
      <p className='about_content' >The main question driving work in the lab is how the brain constructs
      <br /> our subjective experience of the world as we actively engage with our
      <br /> surroundings. We study the interaction of perception, attention, memory 
      <br /> and action within a cognitive neuroscience frameworks. 
      
      </p>
      </div>
      <div style={{overflow:"scroll"}}><p className='about_content' >
      <br />Specifically, our approach can be described as <span style={{color:"orangered", display:"inline"}} >active cognition</span >
      <br />while most studies in the field are based on responses to an abstract 
      <br />stimulus on a single trial during steady fixation, our work examines the way that solving cognitive tasks involves attention and perception interacting
      <br />with context, action (particularly eye movements), memory, emotion and 
      <br />the tasks goals. This research includes a consideration of individual differences, 
      <br />including lifespan changes and clinical differences in cognitive function.   
      </p>
      </div>
    <div style={{overflow:"scroll"}} ><p className='about_content'>
       
       Research in the lab currently focusses on three main themes:
     <li>1. Temporal aspects of cognition</li>
     <li>2. Prediction and sensorimotor integration</li>
     <li>3. Individual, clinical and mood-based differences in speed of information processing</li>



    
</p></div>
    <div style={{overflow:"scroll"}}><p className='about_content'>
      <br />
        The Perception and Active Cognition Lab is part of the Division of Science at New York
University Abu Dhabi. We are hosted in the Computational Research Building (A2), which
includes state-of-the-art research facilities, including a research-only MRI scanner, MEG and
EEG, as well as behavioural, eye-tracking and motion-tracking laboratories. We make use of co-
registered eyetracking with EEG, MEG and MRI in order to study brain responses under more
naturalistic viewing conditions in which participants are able to move their eyes during the task.

       </p></div>
    
   
  </AwesomeSlider>
      
     

        </section>

        <section id="Research">
         
          <div className="research_content">
          <h1>
            RESEARCH AND PUBLICATION
          </h1>
          
          </div>
         
          
    
 

        </section>


    
    </div>
    </>
  );
}

export default App;

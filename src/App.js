import logo from './logo.svg';
import './App.css';
import React from 'react';

import Navbar from "./Navbar";

import { useState } from "react";

import {useRef} from "react";

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
        <div className="scroll"  onClick={goToTop}></div>
             <div className="scroll"  onClick={goToTop} style={{  bottom: "100px"}}></div>
  
            </section> 
        <section id="About" ref={myRef} >
      
          <div className="wrapper">
          
        
         <p className="about_content">
         <h1  style={{"font-size": "60px"}}><b />
       <div style={{color:"purple", display:"inline"}} >PERCEPTION </div> and <div style={{color:"orangered", display:"inline"}} >ACTIVE COGNITION</div > LAB
          </h1>
          The main question driving work in the lab is how the brain constructs our subjective experience
            of the world as we actively engage with our surroundings. We study the interaction of
perception, attention, memory and action within a cognitive neuroscience framework.
Specifically, our approach can be described as <p style={{color:"orangered", display:"inline"}} >active cognition</p >: while most studies in the field
are based on responses to an abstract stimulus on a single trial during steady fixation, our work
examines the way that solving cognitive tasks involves attention and perception interacting
with context, action (particularly eye movements), memory, emotion and the tasks goals. This
research includes a consideration of individual differences, including lifespan changes and
clinical differences in cognitive function.
</p>
   <p className='about_content'>
       
        Research in the lab currently focusses on three main themes:
      <li>1. Temporal aspects of cognition</li>
      <li>2. Prediction and sensorimotor integration</li>
      <li>3. Individual, clinical and mood-based differences in speed of information processing</li>



     
</p>
<p className='about_content'>
        The Perception and Active Cognition Lab is part of the Division of Science at New York
University Abu Dhabi. We are hosted in the Computational Research Building (A2), which
includes state-of-the-art research facilities, including a research-only MRI scanner, MEG and
EEG, as well as behavioural, eye-tracking and motion-tracking laboratories. We make use of co-
registered eyetracking with EEG, MEG and MRI in order to study brain responses under more
naturalistic viewing conditions in which participants are able to move their eyes during the task.

       </p>

          </div>

        </section>

        <section id="Research">
         
          <div className="research_content">
          <h1>
            RESEARCH AND PUBLICATION
          </h1>
          The main question driving work in the lab is how the brain constructs our subjective experience
of the world as we actively engage with our surroundings. We study the interaction of
perception, attention, memory and action within a cognitive neuroscience framework.
Specifically, our approach can be described as &quot;active cognition&quot;: while most studies in the field
are based on responses to an abstract stimulus on a single trial during steady fixation, our work
examines the way that solving cognitive tasks involves attention and perception interacting
with context, action (particularly eye movements), memory, emotion and the tasks goals. This
research includes a consideration of individual differences, including lifespan changes and
clinical differences in cognitive function.
          </div>


        </section>


    
    </div>
    </>
  );
}

export default App;

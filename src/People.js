import { useState } from "react";
import { useEffect } from "react";
import s from "./Images_of_lab_memebers/Alessia_Santoni.jpeg";
import "./People.css";
import React from "react";

function People(na)
{

   
    
 return (

   <><div className="picture">
         <img className="pic" src= "Images_of_lab_memebers/Gaia.jpg" alt="image of the person"></img>
     <div className="description">
      <p>Gaia Lapomarda </p> 
       <p>PostDoc </p>
       Gaia joined NYUAD in 2021 as a Postdoctoral Associate. Her research focuses on the interplay
between emotion and cognition. She applies psychophysiological measures and fMRI techniques
to study how emotions and mood changes influence perception.
         </div></div>
         
         <div className="picture">
         <img className="pic" src= "Images_of_lab_memebers/Alessia_Santoni.jpeg" alt="image of the person"></img>
     <div className="description">
      <p>Alessia Santoni </p> 
       <p>Research assistant (External Collaborator) </p>
       Alessia has completed her MSc in Cognitive Science at the University of Trento and is now
collaborating with New York University Abu Dhabi and University of Trento on a project
investigating visual temporal processing in Developmental Dyslexia. Her main interest is the
study of brain oscillations as a neural signature of conscious visual perception.
         </div></div>
         
         <div className="picture">
         <img className="pic" src= "Images_of_lab_memebers/Iva_Tomeska.jpg" alt="image of the person"></img>
     <div className="description">
      <p>Iva Tomeska </p> 
       <p>Research assistant (External Collaborator) </p>
       Iva was part of NYUAD Class of 2021 and graduated with a BS in Computer Science. She is
interested in the relationship between emotional states and music, and is currently investigating
their effect on cognition and speed of processing.
         </div></div>
         
         
         <div className="picture">
         <img className="pic" src= "Images_of_lab_memebers/MeeraAlex.jpeg" alt="image of the person"></img>
     <div className="description">
      <p>Meera Alex</p> 
       <p>Research Assistant and Lab Manager</p>
       Meera joined the lab in 2021 after completing her M.S in Biomedical Engineering at American
University of Sharjah. She is currently a research assistant and lab manager. Her current research
interests include working memory, perception, and the acquisition and analysis of EEG signals.
         </div></div>


         <div className="picture">
         <img className="pic" src= "Images_of_lab_memebers/MeeraAlex.jpeg" alt="image of the person"></img>
     <div className="description">
      <p>Michele Deodato</p> 
       <p>Research Assistant</p>
       Michele Joined the lab in 2020 as a Research Assistant. He received a MSc in the Science of
Body and Mind from the University of Torino in 2019. He uses EEG and psychophysics to
investigate brain rhythms and their relationship with human cognition and perception.
         </div></div>
         
         <div className="picture">
         <img className="pic" src= "Images_of_lab_memebers/Xiaoyi.jpg" alt="image of the person"></img>
     <div className="description">
      <p>Xiaoyi Liu</p> 
       <p>Research Assistant</p>
       Xiaoyi joined NYUAD in 2020 as a research assistant. He received her BSc in Psychology from
the University of Victoria in 2020. She is interested in how the brain organizes visual inputs at
different spatiotemporal locations. Her current projects focus on trans-saccadic perception, i.e.,
how people integrate visual information before and after eye movements. She also studies the
temporal dynamic of visual perception with behavioral oscillations and EEG.
         </div></div>
         
         
         
         
         </>
 );

}


export default People;
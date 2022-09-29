import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Timeline()
{
    return (

<VerticalTimeline lineColor={"rgba(37, 8, 80, 0.8)"}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(37, 8, 80, 0.8)', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(37, 8, 80, 0.8)' }}
    date="2011 - present" 
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >

    <h3 className="vertical-timeline-element-title">Temporal aspects of cognition and neural processing</h3>
    <li>
        <ul> Acunzo D, Melcher D. Changes in alpha and theta band activity at the time of saccades:
separate contributions of visual and non-visual signals <a href='https://doi.org/10.31234/osf.io/c29xm' >link</a></ul>
        <ul>Ronconi L, Balestrieri E, Baldauf D, Melcher D. Distinct cortical networks subserve
spatio-temporal sampling in vision through different oscillatory rhythms.<a href="https://doi.org/10.1101/2022.05.09.491140">link</a>
         </ul>

        <ul>Liu X, Balestrieri E, Melcher D. (2022) Evidence for a theta-band behavioral oscillation
in rapid face detection, European Journal of Neuroscience <a href='https://onlinelibrary.wiley.com/doi/10.1111/ejn.15790'>link</a></ul>
       
       <ul> Sharp P, Gutteling T, Melcher D, Hickey C. (2022) Spatial attention tunes temporal
processing in early visual cortex, Journal of Neuroscience, in press.  </ul>

       <ul> Drewes J, Muschter E, Zhu W, Melcher D. (2022) Individual resting-state alpha peak
frequency and within-trial changes in alpha peak frequency both predict visual flash
segregation performance. Cerebral Cortex, online ahead of print. <a href="https://doi.org/10.1093/cercor/bhac026">link</a>  </ul>

       <ul> Balestrieri E, Ronconi L, Melcher D (2021) Shared resources between visual attention
and visual working memory are allocated through rhythmic sampling. European Journal
of Neuroscience.<a href="https://doi.org/10.1111/ejn.15264">link</a>  </ul>

<ul>Melcher D, Huber-Huber C, Wutz A (2020) Enumerating the forest before the trees: the
time courses of estimation- and individuation-based numerical processing. Attention,
Perception and Psychophysics, published online 30/9/20 <a href="https://doi.org/10.3758/s13414-
020-02137-5.">link</a>
</ul>

<ul>Melcher D, Kumar D, Srinivasan N (2020) The role of action intentionality and effector in
the subjective expansion of temporal duration after saccadic eye movements. Scientific
Reports <a href="https://www.nature.com/articles/s41598-020-73830-6">link</a></ul>

<ul>Ronconi L, Melcher D, Franchin L. (2020) Investigating the role of temporal processing
in developmental dyslexia: Evidence for a specific deficit in rapid visual segmentation.

Psychonomic Bulletin and Review <a href="https://link.springer.com/article/10.3758/s13423-020-01752-5">link</a> </ul>

<ul>Wutz A, Melcher D, Samaha J (2018) Frequency modulation of neural oscillations
according to visual task demands. Proceedings of the National Academy of Sciences <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5819398/">link</a></ul>

<ul>Ronconi L, Busch N, Melcher D (2018) Alpha-band sensory entrainment alters the
duration of temporal windows in visual perception. Scientific Reports <a href="https://doi.org/10.1038/s41598-018-29671-5">link</a></ul>


<ul >Ronconi L, Oosterhof N, Bonmassar C &amp; Melcher D (2017) Multiple oscillatory rhythms
determine the temporal organization of perception. Proceedings of the National
Academy of Sciences <a href="https://doi.org/10.1073/pnas.1714522114"></a></ul>

<ul></ul>

    </li>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(37, 8, 80, 0.8)', color: 'grey' }}
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    
    <li>
        <ul> Paper 1</ul>
        <ul> Paper 2</ul>
        <ul> Paper 3</ul>
    
    </li>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>

  </VerticalTimeline>



    );
}

export  default Timeline
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
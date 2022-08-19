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

    <h3 className="vertical-timeline-element-title">2022-present</h3>
    <li>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
    </li>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading

      fdsfdscsdcds
      dadscdscds
      dcdscdsvdsac
      dscsac
    </p>
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
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
        <ul> Creative Direction</ul>
    </li>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>

  </VerticalTimeline>



    );
}

export  default Timeline
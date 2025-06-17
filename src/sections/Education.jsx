import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import School from '../assets/icons/school.svg?react';
import College from '../assets/icons/college.svg?react';
import Learning from '../assets/learning.svg?react';
import '../styles/education.css';

export default function Education() {
    return (
        <div className='section education-section'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Master of Computer Applications</h4>
                            <p>SIES College of Management Studies, Navi Mumbai</p>
                            <TimeStamp stamp="2024 - 2026" />
                            <p>Current CGPA: 8.67</p>
                        </TimelineItem>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Bachelor in Engineering (Civil)</h4>
                            <p>Datta Meghe College of Engineering, Navi Mumbai</p>
                            <TimeStamp stamp="2018 - 2022" />
                            <p>CGPA: 8.18</p>
                        </TimelineItem>
                        <TimelineItem icon={<School />} bgColor="#444444">
                            <h4>Higher Secondary Education(12th)</h4>
                            <p>Dr. Antonio Da Silva Technical Junior College, Mumbai</p>
                            <TimeStamp stamp="2016 - 2018" />
                            <p>Percentage: 80.60%</p>
                        </TimelineItem>
                        <TimelineItem icon={<School />} bgColor="#444444">
                            <h4>Secondary Education(10th)</h4>
                            <p>I.E.S V.N Sule Guruji, Mumbai</p>
                            <TimeStamp stamp="2006 - 2016" />
                            <p>Percentage: 76.80%</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

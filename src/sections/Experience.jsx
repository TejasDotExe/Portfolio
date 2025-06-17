import Freelancing from '../assets/freelancing.svg?react';
import Opensource from '../assets/opensource.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import WorkPoint from '../assets/icons/upwork.svg?react';
import Fiverr from '../assets/icons/fiverr.svg?react';
import Github from '../assets/icons/github.svg?react';
import Vinoai from '../assets/vinoai.avif'

export default function Experience() {
    return (
        <div className='experience-section section' style={{ paddingBottom: '0' }}>
            <h2>Work Experience</h2>
            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <h3>Details</h3>
                    <p>I have worked on a variety of projects, including web development, mobile app development, and system design. I have experience working with individuals from different parts of the world, and I have developed a strong understanding of the importance of communication and collaboration in work environments.</p>
                    <Timeline>
                        <TimelineItem icon={<WorkPoint />} color="#6fda44">
                            <h4>Associate IT Consultant, Saksoft</h4>
                            <TimeStamp stamp="May 2024 - August 2024" />
                            <p>&bull; Managed planning, scheduling, and tracking software development projects across cross-functional teams.</p>
                            <p>&bull; Implemented golden gate software which reduced data processing time by 75 minutes.</p>
                            <p>&bull; Implemented a load balancer which resulted in the 20% increase in the traffic handling capacity.</p>
                        </TimelineItem>
                        <TimelineItem icon={<WorkPoint />} color="#1dbf73">
                            <h4>Project Trainee</h4>
                            <TimeStamp stamp="May 2023 - May 2024" />
                            <p>&bull; Monitored resource allocation and addressed potential bottlenecks to maintain project timelines.</p>
                            <p>&bull; Prepared project documentation including status reports, meeting minutes, requirement specifications, and stakeholder presentations.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

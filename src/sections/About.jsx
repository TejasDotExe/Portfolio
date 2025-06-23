import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {

  return (
    <div className='about-section section'>
      <h2>About</h2>
      <p>
        I’m an <a>MCA student</a> with a strong passion for building dynamic, efficient web applications using the 
        <a>Spring Boot and MERN stack</a>. 
        I bring over 15 months of hands-on experience as an <a>Associate IT Consultant</a> at <a>HDFC Bank</a>, 
        where I honed my skills in web development, software management, and enterprise solutions. 
        I've developed a range of full-stack projects using <a>Springboot, ASP.NET, React, Node JS</a>, 
        constantly exploring best practices in both frontend and backend development. 
        I’m also expanding my expertise into the cybersecurity domain. 
        I’m actively seeking new opportunities where I can contribute to impactful projects, collaborate with driven teams 
        and continue learning. 
      </p>
      <p>Let’s build something great together! ✨</p>
      <a href="https://drive.google.com/file/d/15o4FBO7Xm_OkdJPe4UYiZG26c5n4nfUW/view?usp=sharing" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}

import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div className='about-section section'>
      <h2>About</h2>
      <p>
        I’m a <a>MCA student</a>, having a passion towards building dynamic and efficient web applications using the <a>Springboot & MERN stack</a>. I’ve worked as an <a>Associate IT Consultant</a> for 15 months in <a>HDFC Bank</a>, honing my expertise in web development and software management. I have also built many projects in <a>Springboot, ASP.NET, React, Node JS</a>. Actively seeking for new opportunities in development and cybersecurity domain.
      </p>
      <p>Let’s build something great! ✨</p>
      <a href="https://drive.google.com/file/d/15o4FBO7Xm_OkdJPe4UYiZG26c5n4nfUW/view?usp=sharing" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}

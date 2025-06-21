import Sparkles from '../components/Sparkles'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div className='section contact-section'>
            <div className='heading-center'>
                <Sparkles>
                    <h1>Get In Touch</h1>
                </Sparkles>
            </div>
            <p className='contact-text'>
                Have questions? Ping me with a <a href="https://www.linkedin.com/in/tejaschodankar18/" target='_blank'>linkedin. </a> 
                DM or email at <a href='mailto:tejas.chodankar6@gmail.com' target='_blank'>tejas.chodankar6@gmail.com</a>.
            </p>
        </div >
    )
}

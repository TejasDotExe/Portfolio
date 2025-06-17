import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section'>
      <h2>Projects</h2>
      <Holder>  
        <ProjectCard>
          <img src='portfolio-website-preview.png' alt='Portfolio' />
          <Content>
            <h3>Tejas Chodankar, Portfolio</h3>
            <p>This is my personal portfolio website. It showcases my skills, projects, and experiences as a web developer. The portfolio is designed to be visually appealing and easy to navigate, providing a detailed introduction about myself.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Vite" />
            </Tags>
          </Content>
          <CardActions visit="https://portfolio-tejas-cs-projects.vercel.app/" source="https://github.com/malay77patra/portfolio" />
        </ProjectCard>

        <ProjectCard>
          <img src='livedoc-preview.png' alt='Livedoc' />
          <Content>
            <h3>LiveDoc</h3>
            <h3>E-Healthcare Management System</h3>
            <p>LiveDoc is a modern e-healthcare management system that streamlines patient care, appointment scheduling and medical records. Designed for clinics and hospitals, it enables secure, efficient, and connected healthcare delivery from a single digital platform.</p>
            <Tags>
              <Tag hashtag="Java" />
              <Tag hashtag="Springboot" />
              <Tag hashtag="JSP" />
              <Tag hashtag="API Design" />
              <Tag hashtag="JPA" />
              <Tag hashtag="MySQL" />
            </Tags>
          </Content>
          <CardActions visit="https://portfolio-tejas-cs-projects.vercel.app/" source="https://github.com/TejasDotExe/LiveDoc" />
        </ProjectCard>

        <ProjectCard>
          <img src='musicgram-preview.png' alt='Portfolio' />
          <Content>
            <h3>Musicgram</h3>
            <h3>AI powered music player</h3>
            <p></p>
            <Tags>
              <Tag hashtag="Java" />
              <Tag hashtag="Android" />
              <Tag hashtag="XML" />
              <Tag hashtag="Jio Saavn API" />
              <Tag hashtag="K means clustering" />
              <Tag hashtag="GSON" />
            </Tags>
          </Content>
          <CardActions visit="https://portfolio-tejas-cs-projects.vercel.app/" source="https://github.com/TejasDotExe/Musicgram" />
        </ProjectCard>
      </Holder>
    </div>
  )
}

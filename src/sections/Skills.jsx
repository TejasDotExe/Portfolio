import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="skills-section section">
      <h2>Skills</h2>
      <SkillCard
        heading="Frontend"
        skills={[
          { name: "HTML", prefix: "html5", icon: "html5-original" },
          { name: "CSS", prefix: "css3", icon: "css3-original" },
          {
            name: "JavaScript",
            prefix: "javascript",
            icon: "javascript-original",
          },
          { name: "React", prefix: "react", icon: "react-original" },
          {
            name: "Bootstrap",
            prefix: "bootstrap",
            icon: "bootstrap-original",
          },
          {
            name: "Tailwind CSS",
            prefix: "tailwindcss",
            icon: "tailwindcss-original",
          },
          {
            name: "Material-UI",
            prefix: "materialui",
            icon: "materialui-original",
          },
        ]}
      />
      <SkillCard
        heading="Backend"
        hcolor="var(--clr-accent2)"
        skills={[
          { name: "Java", prefix: "java", icon: "java-original" },
          { name: "Springboot", prefix: "spring", icon: "spring-original" },
          { name: "C++", prefix: "cplusplus", icon: "cplusplus-original" },
          { name: "C#", prefix: "csharp", icon: "csharp-original" },
          {
            name: "ASP.NET",
            prefix: "dotnetcore",
            icon: "dotnetcore-original",
          },
          {
            name: "Javascript",
            prefix: "javascript",
            icon: "javascript-original",
          },
          { name: "Node.js", prefix: "nodejs", icon: "nodejs-original" },
          { name: "Express", prefix: "express", icon: "express-original" },
          { name: "Redux", prefix: "redux", icon: "redux-original" },
          { name: "Android", prefix: "android", icon: "android-plain" },
          { name: "MySQL", prefix: "mysql", icon: "mysql-original" },
          {
            name: "MS SQL",
            prefix: "microsoftsqlserver",
            icon: "microsoftsqlserver-original",
          },
          { name: "Oracle SQL", prefix: "oracle", icon: "oracle-original" },
          { name: "MongoDB", prefix: "mongodb", icon: "mongodb-original" },
        ]}
      />
      <SkillCard
        heading="Tools"
        hcolor="var(--clr-accent3)"
        skills={[
          { name: "Git", prefix: "git", icon: "git-original" },
          { name: "GitHub", prefix: "github", icon: "github-original" },
          { name: "GitLab", prefix: "gitlab", icon: "gitlab-original" },
          { name: "Docker", prefix: "docker", icon: "docker-original" },
          { name: "Jenkins", prefix: "jenkins", icon: "jenkins-original" },
          { name: "VS Code", prefix: "vscode", icon: "vscode-original" },
          { name: "Eclipse", prefix: "eclipse", icon: "eclipse-original" },
          {
            name: "Android Studio",
            prefix: "androidstudio",
            icon: "androidstudio-original",
          },
          {
            name: "Visual Studio",
            prefix: "visualstudio",
            icon: "visualstudio-original",
          },
          { name: "Postman", prefix: "postman", icon: "postman-original" },
          { name: "Vercel", prefix: "vercel", icon: "vercel-original" },
          { name: "Figma", prefix: "figma", icon: "figma-original" },
          {
            name: "AWS",
            prefix: "amazonwebservices",
            icon: "amazonwebservices-original-wordmark",
          },
          { name: "NPM", prefix: "npm", icon: "npm-original-wordmark" },
          { name: "Windows", prefix: "windows11", icon: "windows11-original" },
          { name: "Linux", prefix: "linux", icon: "linux-original" },
        ]}
      />
    </div>
  );
}

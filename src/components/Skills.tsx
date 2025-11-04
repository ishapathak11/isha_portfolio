import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa'
import './Skills.css'

interface SkillCategory {
  title: string
  icon: JSX.Element
  skills: string[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: ['Python', 'C', 'C++', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'SQL']
    },
    {
      title: 'Databases & Storage',
      icon: <FaDatabase />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'AWS S3']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaCode />,
      skills: ['ReactJS', 'RESTful APIs', 'GraphQL', 'Flask', 'Django', 'Redux', 'Node.js']
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      skills: ['AWS', 'EC2', 'RDS', 'S3', 'Git', 'Agile/Scrum', 'TDD', 'Performance Optimization']
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

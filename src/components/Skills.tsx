import { FaCode, FaCloud } from 'react-icons/fa'
import './Skills.css'

interface SkillCategory {
  title: string
  icon: JSX.Element
  skills: string[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming & Tools',
      icon: <FaCode />,
      skills: ['Python', 'C', 'C++', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaCode />,
      skills: ['RESTful APIs', 'GraphQL', 'Flask', 'Django',  'FastAPI', 'Pandas', 'NumPy']
    },
    {
      title: 'Databases & Cloud',
      icon: <FaCloud />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'AWS (EC2, S3, RDS)', 'SQL', 'NoSQL', 'Oracle']
    },
    {
      title: 'Tools & Methodologies',
      icon: <FaCloud />,
      skills: ['Agile/Scrum', 'Test-Driven Development (TDD)', 'Code Review', 'Performance Optimization', 'Postman', 'Jira', 'Docker', 'Git']
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

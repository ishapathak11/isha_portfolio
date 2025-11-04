import { FaGraduationCap, FaAward } from 'react-icons/fa'
import './Education.css'

interface EducationItem {
  degree: string
  university: string
  location: string
  period: string
  gpa: string
  achievements?: string[]
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: 'Master of Science, Computer Science',
      university: 'Texas A&M University - Corpus Christi',
      location: 'Texas, USA',
      period: 'Aug 2024 - Present',
      gpa: 'GPA: 3.5',
      achievements: ['Graduate Teaching Assistantship Award']
    },
    {
      degree: 'Bachelor Of Engineering, Computer Engineering',
      university: 'Sankalchand Patel University',
      location: 'Gujarat, India',
      period: 'Aug 2019 - Jun 2023',
      gpa: 'CGPA: 8.4'
    }
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background and achievements</p>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card card">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-university">{edu.university}</h4>
              <p className="education-location">{edu.location}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-gpa">{edu.gpa}</p>
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="education-achievements">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="achievement-badge">
                      <FaAward /> {achievement}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

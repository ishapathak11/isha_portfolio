import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

interface ExperienceItem {
  company: string
  title: string
  location: string
  period: string
  achievements: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Texas A&M University',
      title: 'Graduate Assistantship',
      location: 'Corpus Christi',
      period: 'May 2025 - Present',
      achievements: [
        'Engineered memory optimization and caching strategies for web infrastructure serving 15,000+ users, boosting performance by 35%, reducing server load by 40%, and achieving 25% faster page loads (4.2s to 3.1s)',
        'Implemented database query optimization and resource allocation, contributing to $12,000 annual cost savings and 30% faster response times',
        'Mentored 50+ students in Database Management and Algorithm Design with a 92% satisfaction rating'
      ]
    },
    {
      company: 'Viitor Cloud Technologies',
      title: 'Software Development Engineer',
      location: 'Ahmedabad, Gujarat',
      period: 'Jan 2022 - Aug 2024',
      achievements: [
        'Architected and implemented RESTful APIs using Python (Flask/GraphQL) serving 100,000+ daily requests, ensuring seamless data synchronization between frontend React applications and backend services with 99.9% uptime',
        'Optimized MongoDB database queries through strategic indexing and query restructuring, reducing average query response time by 20% (from 250ms to 200ms) and improving application throughput by 35%',
        'Led deployment of scalable applications on AWS infrastructure (S3, EC2, RDS), implementing auto-scaling policies that maintained 99.9% uptime during 50% traffic surges and reduced operational costs by 18%',
        'Integrated Redis caching layer to handle peak traffic loads exceeding 10,000 concurrent users, decreasing API response times by 45% during high-demand periods and improving user satisfaction scores by 28%',
        'Spearheaded migration to microservices-based architecture for 3 legacy applications, improving system modularity, enabling independent service scaling, and reducing deployment time by 60% while increasing team velocity by 30%',
        'Conducted rigorous code reviews and mentored 4 junior developers in Agile methodologies, elevating overall code quality metrics by 35% and reducing technical debt by $25,000 worth of refactoring time',
        'Championed TDD across 8+ projects, increasing code coverage from 60% to 85% and reducing production bugs by 47%'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey and achievements</p>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

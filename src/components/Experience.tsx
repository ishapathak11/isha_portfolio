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
        'Developed and maintained backend services using Python (Flask/FastAPI) to manage student profile workflows, implementing caching and memory optimization strategies that improved system performance by 35% and reduced server load by 40%',
        'Designed backend architecture using object-oriented programming concepts such as abstraction, inheritance, and encapsulation, creating reusable service layers and modular data models that improved code maintainability and reduced duplication',
        'Optimized MySQL queries and refactored data access layers in Python, reducing response times by 30% and contributing to $12,000 in annual infrastructure cost savings',
        'Built and maintained RESTful APIs for student data management, ensuring efficient CRUD operations, data validation, and secure access controls',
        'Implemented server-side performance monitoring and logging in Python to identify bottlenecks and improve page load times from 4.2s to 3.1s',
        'Mentored 50+ students in Database Management and Algorithm Design, integrating real-world backend engineering concepts into coursework and maintaining a 92% satisfaction rating', 
        'Developed a Proof of Concept (POC) using FastMCP (Python) to expose backend services as structured tools, defining tool schemas and prompt interfaces to enable standardized LLM-based interactions'
      ]
    },
    {
      company: 'Viitor Cloud Technologies',
      title: 'Software Development Engineer',
      location: 'Ahmedabad, Gujarat',
      period: 'Jan 2022 - Aug 2024',
      achievements: [
      'Architected and implemented RESTful APIs using Python (Flask/FastAPI) serving 100,000+ daily requests, ensuring seamless data synchronization between frontend React applications and backend services with 99.9% uptime',
      'Optimized MongoDB queries by adding indexes and restructuring queries, reducing average response time from 250 ms to 200 ms (20% faster) and increasing application throughput by 35%',
      'Implemented JWT-based authentication and role-based access control (RBAC), strengthening application security and reducing unauthorized access issues',
      'Integrated Redis caching layer for BuyAnyFlowers e-commerce platform to handle peak traffic loads exceeding 10,000 concurrent users, decreasing API response times by 45% during high-demand periods and improving user satisfaction scores by 28%',
      'Spearheaded migration to microservices-based architecture using GraphQL for CO4 cost management application, improving system modularity, enabling independent service scaling, and reducing deployment time by 60% while increasing team velocity by 30%',
      'Designed and optimized complex queries and stored procedures on Oracle database, improving data retrieval times by 25% and supporting enterprise-level transactional workloads',
      'Championed TDD across 4+ projects, increasing code coverage from 60% to 85% and reducing production bugs by 47%',
      'Conducted rigorous code reviews and mentored 4 junior developers in Agile methodologies, elevating overall code quality metrics by 35% and reducing technical debt by $25,000 worth of refactoring time',
      'Led deployment of applications on AWS (S3, EC2, RDS) that maintained 99.9% uptime during 50% traffic spikes and reduced operational costs by 18%',
      'Managed end-to-end feature delivery using Jira (Epics, Stories, Tasks), collaborated with product managers on requirement refinement, and participated in sprint planning and retrospectives—improving sprint predictability by 25% and reducing spillover tasks by 30%.'
    ]
  },
  {
      company: 'Xipra Technologies',
      title: 'Backend Developer',
      location: 'Himatnagar, Gujarat',
      period: 'Jul 2022 - Dec 2022',
      achievements: [
        'Developed dynamic UI components using JavaScript (ES6+), improving frontend responsiveness and reducing page load time by 20%',
        'Designed and developed RESTful APIs using Python (Flask/FastAPI) to support web and mobile applications, handling 15,000+ daily requests while ensuring reliable backend performance',
        'Collaborated with frontend developers (React) to integrate APIs and troubleshoot performance bottlenecks, improving end-user response times by 25%',
        'Provided active production support and conducted peer code reviews, following test-driven development (TDD) practices to maintain code quality and reduce post-release defects'
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

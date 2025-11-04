import { FaCode, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

interface Project {
  title: string
  affiliation: string
  description: string
  technologies: string[]
  metrics?: string[]
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'EmotiveChat: AI-Powered Sentiment-Aware Conversational Agent',
      affiliation: 'Texas A&M University, Corpus Christi',
      description: 'Built an intelligent chatbot using NLP/transformer models (BERT, ROBERTa, GPT-3.5) and ML algorithms (SVM, Random Forest, XGBoost) achieving 89% accuracy and F1-score of 0.87 across 10,000+ conversations.',
      technologies: ['Python', 'BERT', 'RoBERTa', 'GPT-3.5', 'SVM', 'Random Forest', 'XGBoost', 'NLP', 'ML'],
      metrics: ['89% Accuracy', 'F1-score: 0.87', '10,000+ Conversations']
    },
    {
      title: 'LinkedIn Connection Automation Platform',
      affiliation: 'Texas A&M University, Corpus Christi',
      description: 'Developed a full-stack automation tool using Python, Selenium, React with ML-based CAPTCHA resolution, processing 500+ daily requests with 94% success rate and 96% reliability. Deployed on Vercel with CDN achieving 99.8% uptime, <500ms latency, 80% effort reduction, supporting 1,000+ concurrent users.',
      technologies: ['Python', 'Selenium', 'React', 'Machine Learning', 'Vercel', 'CDN'],
      metrics: ['94% Success Rate', '96% Reliability', '99.8% Uptime', '<500ms Latency', '1,000+ Concurrent Users']
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Academic Projects</h2>
        <p className="section-subtitle">Innovative projects showcasing my technical expertise</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <div className="project-icon">
                  <FaCode />
                </div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-affiliation">{project.affiliation}</p>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              {project.metrics && (
                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="metric-badge">{metric}</span>
                  ))}
                </div>
              )}
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

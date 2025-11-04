import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my background and expertise</p>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Software Development Engineer with over 2.5 years of hands-on 
              experience in building scalable backend systems and cloud-native applications. 
              Currently pursuing my Master's in Computer Science at Texas A&M University with 
              a focus on AI and advanced algorithms.
            </p>
            <p>
              My expertise lies in architecting high-performance systems, optimizing database 
              performance, and implementing microservices architectures. I have a proven track 
              record of improving system performance by 20-45%, achieving 99.9% uptime, and 
              reducing operational costs through intelligent optimization strategies.
            </p>
            <p>
              Beyond technical skills, I'm passionate about mentoring junior developers, 
              conducting code reviews, and championing best practices like Test-Driven 
              Development (TDD) to ensure code quality and maintainability.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-number">2.5+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">99.9%</div>
              <div className="highlight-label">System Uptime</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">20%</div>
              <div className="highlight-label">Performance Gain</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">4+</div>
              <div className="highlight-label">Developers Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

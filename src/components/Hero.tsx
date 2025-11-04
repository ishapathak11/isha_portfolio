import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="hero-avatar">
              <img 
                src={import.meta.env.BASE_URL + 'profile-picture.jpg'}
                alt="Isha Pathak" 
                className="profile-photo"
                onError={(e) => {
                  // Fallback to initials if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="avatar-gradient" style={{ display: 'none' }}>IP</div>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-name">I'm Isha Pathak, A Software Development Engineer</h1>
            <p className="hero-location">based in Texas, USA</p>
            <p className="hero-description">
              I bring boundless passion to the realm of Software Development with speciality in 
              Backend Systems, Cloud Infrastructure (AWS), and Microservices Architecture. 
              If you've got an exciting project that demands exceptional skills, look no further—I'm your go-to expert!
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/ishapathak11/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ishapathak11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:pathakisha998@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="tel:3617289613" aria-label="Phone">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

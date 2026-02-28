import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About This Project</h1>

      <p>
        This is a Responsive Single Page Application built using React.js.
        It demonstrates client-side routing, API integration, and responsive UI design.
      </p>

      <div className="features">
        <h3>Key Features:</h3>
        <ul>
          <li>Single Page Application (SPA)</li>
          <li>React Router Navigation</li>
          <li>Weather API Integration</li>
          <li>Responsive Layout</li>
          <li>Clean Component Architecture</li>
        </ul>
      </div>

      <div className="tech-stack">
        <h3>Tech Stack:</h3>
        <p>React.js, React Router, CSS3, OpenWeatherMap API</p>
      </div>
    </div>
  );
}

export default About;
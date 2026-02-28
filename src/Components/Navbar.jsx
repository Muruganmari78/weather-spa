import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Weather SPA</h2>
      <div>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/weather">Weather</Link>
        <Link style={styles.link} to="/about">About</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "white",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
  },
};

export default Navbar;   // ✅ VERY IMPORTANT
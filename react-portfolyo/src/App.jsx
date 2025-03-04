import './App.css';
import Hakkimda from './Hakkimda';
import Me from './Me';
import Hizmetlerim from './Hizmetlerim';
import Iletisim from './Iletisim';
import Footer from './Footer';

const App = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = id === "home" ? 0 : -80; // Ana Sayfa için offset = 0, diğerleri için -80
      const sectionPosition = section.offsetTop - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="logo">Ömer Han Yıldırım</a>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection("home")}>Ana Sayfa</a></li>
            <li><a onClick={() => scrollToSection("about")}>Hakkımda</a></li>
            <li><a onClick={() => scrollToSection("services")}>Projeler</a></li>
            <li><a onClick={() => scrollToSection("contact")}>İletişim</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <div id="home"><Me /></div>
        <div id="about"><Hakkimda /></div>
        <div id="services"><Hizmetlerim /></div>
        <div id="contact"><Iletisim /></div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

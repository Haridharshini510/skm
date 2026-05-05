import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const pathname = window.location.pathname;
  const isAboutPage = pathname === '/about';
  const isServicesPage = pathname === '/services';
  const isContactPage = pathname === '/contact';

  return (
    <>
      <Navbar />
      {isAboutPage ? <About /> : isServicesPage ? <Services /> : isContactPage ? <Contact /> : <Home />}
      <Footer />
    </>
  );
}

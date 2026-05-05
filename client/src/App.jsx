import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/ContactPage';

export default function App() {
  const rawPathname = window.location.pathname;
  const pathname = rawPathname.length > 1 && rawPathname.endsWith('/') ? rawPathname.slice(0, -1) : rawPathname;
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

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/ContactPage';
import Registrations from './pages/Registrations';
import Trademark from './pages/Trademark';
import Gst from './pages/Gst';
import IncomeTax from './pages/IncomeTax';
import Mca from './pages/Mca';
import Compliance from './pages/Compliance';
import Startup from './pages/Startup';

export default function App() {
  const rawPathname = window.location.pathname;
  const pathname = rawPathname.length > 1 && rawPathname.endsWith('/') ? rawPathname.slice(0, -1) : rawPathname;
  const routeMap = {
    '/': <Home />,
    '/about': <About />,
    '/services': <Services />,
    '/contact': <Contact />,
    '/registrations': <Registrations />,
    '/trademark': <Trademark />,
    '/gst': <Gst />,
    '/income-tax': <IncomeTax />,
    '/mca': <Mca />,
    '/compliance': <Compliance />,
    '/startup': <Startup />,
  };

  return (
    <>
      <Navbar />
      {routeMap[pathname] || <Home />}
      <Footer />
    </>
  );
}

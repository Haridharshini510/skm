import ServicepageLayout from '../components/ServicepageLayout';
import { servicePageData } from '../data/servicePageData.jsx';

export default function Registrations() {
  return <ServicepageLayout {...servicePageData.registrations} />;
}

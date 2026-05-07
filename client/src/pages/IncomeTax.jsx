import ServicepageLayout from '../components/ServicepageLayout';
import { servicePageData } from '../data/servicePageData.jsx';

export default function IncomeTax() {
  return <ServicepageLayout {...servicePageData.incomeTax} />;
}

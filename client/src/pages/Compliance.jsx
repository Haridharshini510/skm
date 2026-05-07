import ServicepageLayout from '../components/ServicepageLayout';
import { servicePageData } from '../data/servicePageData.jsx';

export default function Compliance() {
  return <ServicepageLayout {...servicePageData.compliance} />;
}

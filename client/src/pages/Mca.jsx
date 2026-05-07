import ServicepageLayout from '../components/ServicepageLayout';
import { servicePageData } from '../data/servicePageData.jsx';

export default function Mca() {
  return <ServicepageLayout {...servicePageData.mca} />;
}

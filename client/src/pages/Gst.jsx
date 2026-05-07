import ServicepageLayout from '../components/ServicepageLayout';
import { servicePageData } from '../data/servicePageData.jsx';

export default function Gst() {
  return <ServicepageLayout {...servicePageData.gst} />;
}

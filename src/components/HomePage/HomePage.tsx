import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AdminAccessSection from './AdminAccessSection';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <HeroSection />
      <FeaturesSection />
      <AdminAccessSection />
      <Footer />
    </div>
  );
}

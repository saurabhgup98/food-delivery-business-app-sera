import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import UserTypesSection from './UserTypesSection';
import AdminAccessSection from './AdminAccessSection';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900 custom-scrollbar overflow-y-auto">
      <HeroSection />
      <FeaturesSection />
      <UserTypesSection />
      <AdminAccessSection />
      <Footer />
    </div>
  );
}

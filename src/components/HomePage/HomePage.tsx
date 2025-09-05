import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import UserTypesSection from './UserTypesSection';
import AdminAccessSection from './AdminAccessSection';
import Footer from './Footer';

interface HomePageProps {
  onRegisterClick?: () => void;
}

export default function HomePage({ onRegisterClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-dark-900 custom-scrollbar overflow-y-auto">
      <HeroSection onRegisterClick={onRegisterClick} />
      <FeaturesSection />
      <UserTypesSection />
      <AdminAccessSection onRegisterClick={onRegisterClick} />
      <Footer />
    </div>
  );
}

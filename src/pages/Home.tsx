import HeroSection from '../components/HomePage/HeroSection';
import FeaturesSection from '../components/HomePage/FeaturesSection';
import UserTypesSection from '../components/HomePage/UserTypesSection';
import AdminAccessSection from '../components/HomePage/AdminAccessSection';
import HomePageFooter from '../components/Footer/HomePageFooter';


interface HomePageProps {
  onRegisterClick?: () => void;
}

export default function Home({ onRegisterClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-dark-900 custom-scrollbar overflow-y-auto">
      <HeroSection onRegisterClick={onRegisterClick} />
      <FeaturesSection />
      <UserTypesSection />
      <AdminAccessSection onRegisterClick={onRegisterClick} />
      <HomePageFooter />
    </div>
  );
}
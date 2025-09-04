import CTAButton from './CTAButton';
import { adminAccessData } from '../../data/homePageData';

export default function AdminAccessSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          {adminAccessData.title}
        </h2>
        <p className="text-gray-300 mb-8">
          {adminAccessData.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={adminAccessData.primaryCTA.href} variant="secondary">
            {adminAccessData.primaryCTA.text}
          </CTAButton>
          <CTAButton 
            href={adminAccessData.secondaryCTA.href} 
            variant="outline" 
            className="border-sera-blue text-sera-blue hover:bg-sera-blue hover:text-white"
          >
            {adminAccessData.secondaryCTA.text}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

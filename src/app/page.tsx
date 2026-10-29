import Hero from '@/components/Hero';
import AboutOverview from '@/components/AboutOverview';
import StatsSection from '@/components/StatsSection';
import NewProjectSection from '@/components/NewProjectSection';
import WhyThallySection from '@/components/WhyThallySection';
import WhatManagedMeansSection from '@/components/WhatManagedMeansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import FaqSection from '@/components/FaqSection';

export default function Home() {
    return (
        <>
            <Hero />
            <AboutOverview />
            <StatsSection />
            <NewProjectSection />
            <WhyThallySection />
            <WhatManagedMeansSection />
            <div className="cv-auto">
                <TestimonialsSection />
            </div>
            <div className="cv-auto">
                <ProjectsSection limit={6} showExploreButton={true} />
            </div>
            <div className="cv-auto">
                <FaqSection />
            </div>
        </>
    );
}

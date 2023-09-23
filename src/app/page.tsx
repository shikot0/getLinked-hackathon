'use client'
import HeroSection from '@/Components/HeroSection/HeroSection';
import OverviewSection from '@/Components/OverviewSection/OverviewSection';
import JudgingSection from '@/Components/JudgingSection/JudgingSection';
import FAQSection from '@/Components/FAQSection/FAQSection';
import TimelineSection from '@/Components/TimelineSection/TimelineSection';
import PrizesSection from '@/Components/PrizesSection/PrizesSection';
import PartnersSection from '@/Components/PartnersSection/PartnersSection';
import PrivacySection from '@/Components/PrivacySection/PrivacySection';
import './globals.css';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <JudgingSection />
      <FAQSection />
      <TimelineSection />
      <PrizesSection />
      <PartnersSection />
      <PrivacySection />
    </main>
  )
}

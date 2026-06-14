import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProblemAmplification from "@/components/ProblemAmplification";
import EmailShowcase from "@/components/EmailShowcase";
import CaseStudies from "@/components/CaseStudies";
import KlaviyoServices from "@/components/KlaviyoServices";
import Process from "@/components/Process";


import Testimonials from "@/components/Testimonials";

import FinalCTA from "@/components/FinalCTA";


export default function Home() {
  return (
    <main className="flex flex-col">
      {/* HERO - HOOK */}
      <Hero />

      {/* TRUST - CREDIBILITY */}
      <TrustStrip />

      {/* PROBLEM AMPLIFICATION */}
      <ProblemAmplification />

       {/* PROOF VISUAL */}
      <EmailShowcase />

      {/* DEEP PROOF */}
      <CaseStudies />

      {/* KLAVIYO SERVICES */}
      <KlaviyoServices />

      {/* PROCESS - HOW IT WORKS */}
      <Process />




     

     

      
      {/* SOCIAL PROOF */}
      <Testimonials />


      

      {/* FINAL CONVERSION LAYER */}
      <FinalCTA />  

      
      

    </main>
  );
}
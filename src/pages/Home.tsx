// import { createFileRoute } from "@tanstack/react-router";
import { Link } from "react-router-dom";
import { Hero } from "../sections/Hero";
import { ProblemSolution } from "../sections/ProblemSolution";
import { ServicesOverview } from "../sections/ServicesOverview";
import { WhyChooseUs } from "../sections/WhyChooseUs";
import { Process } from "../sections/Process";
import { Industries } from "../sections/Industries";
import { Testimonials } from "../sections/Testimonials";
import { CTA } from "../sections/CTA";

// Add "export default" here so App.tsx can see it
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
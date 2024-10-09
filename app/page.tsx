import Image from "next/image";
import { Container } from "./components/container";
import Hero from "./components/hero-section";
import { SecondSection } from "./components/second-section";
import { WorkSteps } from "./components/work-steps";

export default function Home() {
  return (
    <Container>
      <Hero/> 
<div className="mt-10">
<SecondSection></SecondSection>
</div>
<WorkSteps></WorkSteps>
    </Container>

  );
}

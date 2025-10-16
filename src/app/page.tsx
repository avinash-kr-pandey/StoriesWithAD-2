import ARRIVALS from "@/components/ARRIVALS/ARRIVALS";
import Cards from "@/components/Cards/Cards";
import CURATED from "@/components/CURATED/CURATED";
import LEADING from "@/components/LEADING/LEADING";
import LeadingTwo from "@/components/Ledingtwo/LeadingTwo";
import SolveYourDesign from "@/components/SOLVEYOURDESIGN/SOLVEYOURDESIGN";
import TextPart from "@/components/TextPart/TextPart";

export default function Home() {
  return (
    <>
      <TextPart />
      <CURATED />
      <Cards />
      <LEADING />
      <ARRIVALS />
      <LeadingTwo />
      <SolveYourDesign/>
    </>
  );
}

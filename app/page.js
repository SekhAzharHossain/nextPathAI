import { Divide } from "lucide-react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeactureSection from "@/components/FeactureSection";
import HowItsWorkSection from "@/components/HowItsWorkSection";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeactureSection/>
      <HowItsWorkSection/>
      <Faqs/>
    </div>
  )
}
import Image from "next/image";
import Section1 from "./components/Section1/page";
import Section2 from "./components/Section2/page";
import Section3 from "./components/Section3/page";
import Introduction from "./components/Introduction/page";
import FAQSection from "./components/FAQSection/page";
import Proffesional from "./components/Proffesional/page";
import Homepage from "./pages/Homepage/page"
import GetStartedSection from "./components/GetStartedSection/page"

export default function Home() {
  return (
    <div>
        <Homepage/>
        <Introduction/>
        <Section1/>
        <Section2/>
        <Section3/>
        <FAQSection/>
        <Proffesional/>
        <GetStartedSection/>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
    </div>
  );
}

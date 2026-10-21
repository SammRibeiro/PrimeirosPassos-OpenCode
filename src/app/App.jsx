import Navbar from "../views/Navbar/Navbar";
import Hero from "../views/Hero/Hero";
import Benefits from "../views/Benefits/Benefits";
import ProductShowcase from "../views/ProductShowcase/ProductShowcase";
import HowItWorks from "../views/HowItWorks/HowItWorks";
import Testimonials from "../views/Testimonials/Testimonials";
import Pricing from "../views/Pricing/Pricing";
import Faq from "../views/Faq/Faq";
import FinalCta from "../views/FinalCta/FinalCta";
import Footer from "../views/Footer/Footer";
import WaitlistModal from "../views/WaitlistModal/WaitlistModal";
import useWaitlistViewModel from "../viewmodels/useWaitlistViewModel";
export default function App() {
  const waitlist = useWaitlistViewModel();
  return (
    <>
      <Navbar onWaitlist={waitlist.open} />
      <main>
        <Hero onWaitlist={waitlist.open} />
        <Benefits />
        <ProductShowcase />
        <HowItWorks />
        <Testimonials />
        <Pricing onReserve={waitlist.open} />
        <Faq />
        <FinalCta onWaitlist={waitlist.open} />
      </main>
      <Footer />
      <WaitlistModal vm={waitlist} />
    </>
  );
}

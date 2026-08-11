import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Manifesto } from "@/components/site/manifesto";
import { Collection } from "@/components/site/collection";
import { Heritage } from "@/components/site/heritage";
import { Usps } from "@/components/site/usps";
import { Testimonial } from "@/components/site/testimonial";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Collection />
        <Heritage />
        <Usps />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

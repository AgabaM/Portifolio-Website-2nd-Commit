import Header from "@/sections/Header";
import Hero from "@/sections/Hero"
import { Projects } from "@/sections/Projects"
import {Tape} from "@/sections/Tape"
import { TestimonialsSection } from "@/sections/Testimonials";
import AboutSection from "@/sections/About";
import  ContactSection from "@/sections/Contact";
import {Footer} from "@/sections/Footer";
export default function Home() {
  return (
    <div  >
      <div>
        <section id="Header">
      <Header />
      </section>
      <Hero/>
      <section id="projects">
      <Projects/>
      </section>
      <Tape/>
      <TestimonialsSection/>
      <section id="About">
      <AboutSection/>
      </section>
      <section id="Contact">
      <ContactSection/>
      </section>
      <Footer/>
      </div>
    </div>
  );
}

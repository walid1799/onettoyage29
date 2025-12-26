import Hero from "./sections/Hero";
import Bienvenue from "./sections/Bienvenue";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Bienvenue />
        <Services />
        <Contact />
      </main>
    </>
  );
}

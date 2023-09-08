import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Articles />
      <Footer />
    </main>
  );
}

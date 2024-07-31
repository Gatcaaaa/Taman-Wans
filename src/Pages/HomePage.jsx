import Hero from "../components/ui/Hero";
import BlogSection11 from "../components/ui/Section";
import WhoIsMe from "../components/WhoIsMe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <BlogSection11 />
        <WhoIsMe />
      </div>
    </>
  );
}

import HeroSection16 from "../components/Home/Hero";
import BlogSection11 from "../components/Home/Section";
import WhoIsMe from "../components/Home/WhoIsMe";

export default function HomePage() {
  return (
    <>
      <HeroSection16 />
      <div className="container mx-auto px-4">
        <BlogSection11 />
        <WhoIsMe />
      </div>
    </>
  );
}

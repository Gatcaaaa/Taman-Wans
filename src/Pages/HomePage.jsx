import HeroSection16 from "../components/ui/Hero";
import BlogSection11 from "../components/ui/Section";
import WhoIsMe from "../components/WhoIsMe";

export default function HomePage() {
    return <>
        <HeroSection16 />
        <div className="container mx-auto px-4">
            <BlogSection11 />
            <WhoIsMe />
        </div>
    </>
}
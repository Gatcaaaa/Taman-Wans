import Banner from "./Banner";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <Fade direction="left">
        <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
        <Banner />
      </Fade>
    </div>
  );
}

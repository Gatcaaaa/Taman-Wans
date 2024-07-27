import { motion } from "framer-motion";
import Banner from "./Banner";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto mt-10 md:mt-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
      <Banner />
    </motion.div>
  );
}

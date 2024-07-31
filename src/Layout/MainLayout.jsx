import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer16 from "../components/ui/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer16 />
    </>
  );
}

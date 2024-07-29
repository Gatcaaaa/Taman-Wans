import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  BugAntIcon,
  RectangleStackIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-2xl py-1 md:py-5 px-2 pt-4 md:px-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <Typography color="blue-gray" className="text-lg font-bold">
            Taman Wanasutan
          </Typography>
        </Link>

        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          <NavItem>
            <RectangleStackIcon className="h-5 w-5" />
            Arsip
          </NavItem>

          <Link to="/flora-fauna">
            <NavItem>
              <BugAntIcon className="h-5 w-5" />
              Flora Fauna
            </NavItem>
          </Link>

          <NavItem>
            <BugAntIcon className="h-5 w-5" />
            Poca Buku
          </NavItem>
        </ul>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            <NavItem>
              <RectangleStackIcon className="h-5 w-5" />
              Arsip
            </NavItem>
            <Link to="/flora-fauna">
              <NavItem>
                <BugAntIcon className="h-5 w-5" />
                Flora Fauna
              </NavItem>
            </Link>
            <NavItem>
              <Squares2X2Icon className="h-5 w-5" />
              Poca Buku
            </NavItem>
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  BugAntIcon,
  RectangleStackIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import NavItem from "./NavItem";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <Link to="/">
          <span className="text-blue-gray-700 text-lg font-bold">
            Taman Wanasutan
          </span>
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
            <Squares2X2Icon className="h-5 w-5" />
            Poca Buku
          </NavItem>
        </ul>
        <button
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden text-gray-700"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden ${open ? "block" : "hidden"} bg-white shadow-md`}
      >
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
      </div>
    </nav>
  );
}

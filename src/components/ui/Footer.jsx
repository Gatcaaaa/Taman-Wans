import { Typography } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer16() {
  return (
    <footer className="px-8 py-10">
      <hr className="w-full border-t border-gray-300 mb-10" />
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="black"
                  className="font-medium !text-black transition-colors hover:!text-gray-900"
                >
                  {link}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
}
export default Footer16;

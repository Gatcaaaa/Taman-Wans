export default function NavItem({ children }) {
  return (
    <li>
      <a
        href="#"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </a>
    </li>
  );
}

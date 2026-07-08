import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/gallery", label: "Gallery" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact Us" },
];

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <h1 className="text-xl font-bold">Logo</h1>

        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
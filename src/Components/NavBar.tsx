const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold">Logo</h1>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="/" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-blue-600">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
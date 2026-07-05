

const NavBar = () => {
  return (
    <div>
        <header className="w-full shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <nav>
                    <ul>Home</ul>
                    <ul>Gallery</ul>
                    <ul>Products</ul>
                    <ul>About</ul>
                    <ul>Contact Us</ul>
                    </nav>
                </div>
            </div>
        </header>
    </div>
  )
}

export default NavBar

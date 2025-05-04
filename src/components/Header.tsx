const Header = () => {
    return (
      <header className="bg-transparent text-white p-6 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Chandana Gurram</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-pink-300">About</a>
            <a href="#projects" className="hover:text-pink-300">Projects</a>
            <a href="#skills" className="hover:text-pink-300">Skills</a>
            <a href="#contact" className="hover:text-pink-300">Contact</a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  
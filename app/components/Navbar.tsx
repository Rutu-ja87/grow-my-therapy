export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide cursor-pointer hover:opacity-80 transition duration-300">
          Grow My Therapy
        </h1>

        <nav className="flex space-x-8 text-gray-600 font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-black transition duration-300">
                {item}
              </span>

              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

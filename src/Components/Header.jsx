import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeaderLabels = [
  { headerName: "about" },
  { headerName: "experience" },
  { headerName: "projects" },
  { headerName: "skills" },
  { headerName: "contact" },
  // { headerName: "github", to: "https://github.com/DeepGajjar31" },
  // { headerName: "blogs", to: "/blog" },
]

function handleScroll({ data }) {
  const section = document.getElementById(data.headerName);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-2 px-4 backdrop-blur-sm mt-2 sm:mt-4 bg-gray-200/5 border-t w-[98%] sm:w-[90%] mx-auto sm:rounded-full rounded-lg transition-all duration-300 ease-in-out relative z-50 h-14 sm:h-auto border-b sm:border-0 border-gray-600/50">
        <div>
          <p className="text-xl font-semibold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            CoDeep
          </p>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <Link className="text-gray-900 bg-white text-sm font-medium hover:font-semibold py-1 px-2 rounded-md tracking-tight hover:bg-gray-50 transition-all ease-linear duration-150">
              Let&apos;s Talk
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        ) : (
          <>
            <nav className="hidden sm:flex gap-4">
              {HeaderLabels.map((data) => (
                <Link
                  key={data.headerName}
                  className="text-gray-400 text-sm font-semibold hover:text-gray-200 transition-all ease-linear duration-200 cursor-pointer py-2 hover:bg-gray-600/20 rounded-md px-2 capitalize"
                  onClick={() => handleScroll({ data })}
                  to={data.to}
                  target={data.to ? "_blank" : undefined}
                >
                  <span>{data.headerName}</span>
                </Link>
              ))}
              <Link className="hidden sm:block text-gray-900 bg-white text-sm font-medium hover:font-semibold py-2 px-2 rounded-md tracking-tight hover:bg-gray-50 transition-all ease-linear duration-150" to="/">
              {/* <Link className="text-cyan-500 bg-transparent border border-cyan-500 rounded-md py-1 px-2 transition-400 " to="/"> */}
                Let&apos;s Talk
              </Link>
            </nav>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <>
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
              }`}
          />
          <div
            className={`fixed top-14 left-[1%] right-[1%] bg-gray-800/95 backdrop-blur-sm w-[98%] mx-auto transition-all duration-300 ease-in-out rounded-lg overflow-hidden ${isMenuOpen
              ? "opacity-100 visible border border-gray-600/30"
              : "opacity-0 invisible pointer-events-none"
              }`}
            style={{
              height: isMenuOpen ? "calc(98% - 3.5rem)" : "0",
              maxHeight: "calc(100vh - 3.5rem)",
            }}
          >
            <nav className="flex flex-col items-center justify-center h-full py-4">
              {HeaderLabels.map((data) => (
                <Link
                  key={data.headerName}
                  className="text-gray-200 text-lg font-semibold hover:text-white transition-all ease-linear duration-200 cursor-pointer py-2 px-4 rounded-md capitalize"
                  onClick={() => {
                    handleScroll({ data });
                    setIsMenuOpen(false);
                  }}
                  to={data.to}
                  target={data.to ? "_blank" : undefined}
                >
                  <span>{data.headerName}</span>
                </Link>
              ))}
            </nav>
            <Link
              className="mt-4 text-gray-900 bg-white text-sm font-medium hover:font-semibold py-2 px-4 rounded-full tracking-tight hover:bg-gray-50 transition-all ease-linear duration-150"
              to="/"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </>
      )}
    </header>
  )
}


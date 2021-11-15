import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/pages/index.js">
              <a className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:opacity-75">
                MNTL
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none rounded-lg"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none rounded-lg" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col space-x-3 lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a href="/find-support/" className="px-2 py-2 flex items-center text-sm uppercase font-bold leading-snug text-blueGray-700 hover:opacity-75">
                  Find Support
                </a>
              </li>
              <li className="px-2 py-2 flex items-center text-sm uppercase font-bold leading-snug text-blueGray-700 hover:opacity-75">
                <Link href="/wellness-quiz/">
                  <a>
                    Take the Quiz
                  </a>
                </Link>
              </li>
              <li className="px-2 py-2 flex items-center text-sm uppercase font-bold leading-snug text-blueGray-700 hover:opacity-75">
                <Link href="/wellness-plan/">
                  <a>Wellness Plan</a>
                </Link>
              </li>
              <li className="px-2 py-2 flex items-center text-sm uppercase font-bold leading-snug text-blueGray-700 hover:opacity-75">
                <Link href="/crisis/">
                  <a>CRISIS</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
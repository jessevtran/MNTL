import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Career() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">

              <h2 className="font-semibold text-4xl text-blueGray-600">
                Career
              </h2>
              <div className="pt-6">
                <p className="text-base font-light leading-relaxed mt-0 mb-4 text-blueGray-800">
                  Career is an important aspect when it comes to an individual's prowess.
                  Productivity and efficiency can benefit oneself by using these self-help resources
                  listed below.

                </p>
              </div>
              <h3 className="font-semibold text-2xl text-blueGray-600">
                Tips 
              </h3>
              <div className="pt-6">
                <ul class="list-disc">
                  <li>  </li>
                  <li>  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>
      <Footer />
    </>
  );
}
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Physical() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">

          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">

              <h2 className="font-semibold text-4xl text-blueGray-600">
                Physical Wellness
              </h2>

              <div className="pt-6">
                <p>
                  Physical Wellness plays an important role in your overall well-being and success.
                  Not only does regular activity prevent diseases such as diabetes, heart disease,
                  and high blood pressure, it is essential for reducing stress and the affects of
                  depression and anxiety <a
                    href="https://www.tandfonline.com/doi/full/10.1080/08039480802315640" >[1]
                  </a>.
                </p>
              </div>

              <div className="pt-6">
                <p>

                </p>


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
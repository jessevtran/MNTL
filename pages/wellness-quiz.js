/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import WellnessForm from "components/Forms/WellnessAssessment/WellnessAssessmentForm.js";

export default function WellnessQuiz() {
  return (
    <>
      <IndexNavbar />
      <section className="relative px-8 pt-16 md:px-4 justify-center flex h-screen max-h-860-px">

        {/* //FIXME: ProgressBar  */}
        <div className="absolute flex w-full h-10 items-center justify-center bg-blueGray-300">
            <div className="overflow-hidden w-1/2 h-2 text-xs flex rounded bg-emerald-200">
              <div
                style={{width:50}}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white bg-emerald-500"
              ></div>
            </div>
          </div>

        <div className=" mt-8 mx-20 w-full md:w-auto sm:w-auto justify-center flex flex-wrap">
          

          {/* //FIXME: Formink */}
          <WellnessForm />
          {/* //TODO:Pagination */}
        </div>
      </section>

      <Footer />
    </>
  );
}

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
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
            
          {/* //TODO: ProgressBar  */}
          
          {/* //FIXME: Formink */}
          <WellnessForm>

          </WellnessForm>
          {/* //TODO:Pagination */}
        </div>
      </section>

      <Footer />
    </>
  );
}

import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Physical() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="relative pt-48 items-center flex h-screen max-h-860-px mb-48">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600 mb-8">
                Physical Wellness
              </h2>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mb-0">
              What is Physical Wellness?
            </h3>

            <p className="text-base font-light leading-relaxed mt-0 mb-6 text-blueGray-800 pt-0">
              Physical Wellness plays an important role in your overall well-being and success.
              Not only does regular activity prevent diseases such as diabetes, heart disease,
              and high blood pressure, it is essential for reducing stress and the affects of
              depression and anxiety <a
                href="https://www.tandfonline.com/doi/full/10.1080/08039480802315640" className="text-lightBlue-300 underline">[1]
              </a>.
            </p>

            <h3 className="font-semibold text-2xl text-blueGray-600 mt-4">
              Tips For Improving Physical Wellness
            </h3>

            <div className="mb-6 pl-5 font-light text-blueGray-800">
              <ul className="list-disc list-outside">
                <li>Aim for at least 150 minutes of physical activity each week!</li>
                <li>Try to get at least eight hours of sleep per night.</li>
                <li>Stay hydrated! Drink plenty of water throughout the day and avoid soda or beverages high in sugar.</li>
                <li>You don't have to be an olympic athlete to be physically well! Do activities that you enjoy, and make them part of your daily routine.</li>
                <li>Track your progress. Start small and build up i.e. If you're walking, slowly increase walking time/distance.</li>
              </ul>
            </div>

            <div className="font-semibold text-2xl text-blueGray-600 mb-0">
              <h3>
                Resources TODO: BOXES FOR LIST ENTRIES
              </h3>
            </div>

            <div className="mb-6 pl-5 font-light text-blueGray-800">
            <ul className="list-disc list-outside">
              <li> <a href="https://www.nih.gov/health-information/physical-wellness-toolkit" className="text-lightBlue-300 underline">National Institute of Health: Physical Wellness Toolkit</a></li>
              <li> <a href="https://shs.gmu.edu/healthed/exercise/" className="text-lightBlue underline">Mason Student Health Services: Exercise</a></li>
              <li> <a href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/why-is-physical-activity-so-important-for-health-and-wellbeing" className="text-lightblue-300 underline">Heart.org: Why is Physical Activity So Important For Health and Well-Being?</a></li>
            </ul>
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
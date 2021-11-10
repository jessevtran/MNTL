import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Career() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="relative pt-48 items-center flex h-screen max-h-860-px mb-48">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600 mb-8">
                Career Wellness
              </h2>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mb-0">
              What is Career Wellness?
            </h3>

            <p className="text-base font-light leading-relaxed mt-0 mb-6 text-blueGray-800 pt-0">
              Career wellness is an important aspect when it comes to an individual's sense purpose and productivity.
              It involves being able to balance school work, jobs, and activities outside of work, also known as work-life balance.
              It is important to consider that the career that you want to work in fits your skills and interests, and makes you feel
              good about what you've accomplished. However, you should also make sure to put yourself first; your mental, emotional, and physical
              wellbeing is most important.
            </p>

            <h3 className="font-semibold text-2xl text-blueGray-600 mt-4">
              Tips For Improving Career Wellness
            </h3>

            <div className="mb-6 pl-5 font-light text-blueGray-800">
              <ul className="list-disc list-outside">
                <li>Ask yourself: are you thinking about a major that you find interesting and meaningful?</li>
                <li>Create goals for yourself. What do you want to achieve in life? </li>
                <li>Don't settle. Keep motivated and keep working towards your goals.</li>
                <li>As a student, take advantage of the resources around you! Ask professors for insight and professional advice! Sign up for career fairs and workshops</li>
                <li>If your current job is stressful. Not enough personal time? Large tasks? reflect on your work-life balance and create new goals.</li>
              </ul>
            </div>
            <div className="font-semibold text-2xl text-blueGray-600 mb-0">
              <h3>
                Resources TODO: BOXES FOR LIST ENTRIES
              </h3>
            </div>
            <div className="mb-6 pl-5 font-light text-blueGray-800">
              <ul className="list-disc list-outside">
                <li>Check out <a href="https://gmu.joinhandshake.com/login" className="text-lightBlue-300 underline">Handshake</a>, Mason's source for jobs, internships, and career fairs.</li>
                <li><a href="https://masononline.gmu.edu/university-career-services/" className="text-lightBlue-300 underline">University Career Services</a></li>
                <li><a href="https://introwellness.com/health/what-is-occupational-wellness/" className="text-lightBlue-300 underline">https://introwellness.com/health/what-is-occupational-wellness/</a></li>
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
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Academic() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="relative pt-48 items-center flex h-screen max-h-860-px mb-48">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600 mb-8">
                Academic Wellness
              </h2>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mb-0">
              What is Academic Wellness?
            </h3>


            <div className="text-base font-light leading-relaxed mt-0 mb-6 text-blueGray-800 pt-0">
              <p>
                Academic Wellness is the management of academic workload and
                and drive to keeping our minds open to new ideas and experiences in life.
                Continuing to pursue your education is a journey to
                acquire the skills and knowledge, as well as networks and connections, 
                to help you succeed in any career.
              </p>

              <p className="mt-2">
                Many students feel that they are pressued to achieve academic success. It can be hard to 
                balance personal and academic wellness and can find that they are feeling overwhelmed. 
                Making sure that you have the tools you need is crucial for success. For instance, 
                where do you like to study? Knowing how to study effectively, regularly attending classes,
                and managing your time are keys to great academic wellnesss.
              </p>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mt-4">
              Tips For Improving Academic Wellness
            </h3>

            <div className="mb-6 pl-5 font-light text-blueGray-800">
              <ul className="list-disc list-outside">
                <li>The environment where you study matters. Where do you like to study? The library? At home? Coffee Shops? <a href="https://library.gmu.edu/locations/fenwick" className="text-lightBlue-300 underline">Fenwick</a> is
                  open from 8:00AM - 11:00PM and most GMU campus buildings are open 24/7.</li>
                <li>Find yourself behind on assignments? Try making a to-do list! or maintain a planner to keep track of all your assignments!</li>
                <li>Meeting with your department advisors can be great for your four-year planning and academic concerns</li>
                <li>Check out the <a href="https://stearnscenter.gmu.edu/knowledge-center/knowing-mason-students/student-support-resources-on-campus/" className="text-lightBlue-300 underline">university resources</a> for help on math, writing, and career services!</li>

              </ul>
            </div>
            <div className="font-semibold text-2xl text-blueGray-600 mb-0">
              <h3>
                Resources TODO: BOXES FOR LIST ENTRIES
              </h3>
            </div>
            <div className="mb-6 pl-5 font-light text-lightBlue-300 underline">
              <ul className="list-disc list-outside">
                <li><a href="https://extension.harvard.edu/blog/5-strategies-for-academic-success-using-your-strengths/">Harvard Extension: 5 Strategies For Academic Success Using Your Strengths</a></li>
                <li><a href="https://www.oxfordlearning.com/how-to-study-effectively/">Oxford Learning: How To Study Effectively</a></li>
                <li><a href="https://www.forbes.com/sites/kevinkruse/2015/11/09/time-management-students/?sh=5a5ce76d6a4c"> Forbes: Time Management Secrets</a></li>
                <li><a href="https://advising.gmu.edu/">George Mason University: Advising</a></li>
                <li><a href="https://stearnscenter.gmu.edu/knowledge-center/knowing-mason-students/student-support-resources-on-campus/">George Mason University: Student Support Resources On Campus</a></li>
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
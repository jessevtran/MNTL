import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Academic() {
  return (
    <>
      <IndexNavbar fixed />

      {/* BACKGROUND. DRAWS THE BLOCK ON TOP OF BACKGROUND*/}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          }}
        >
          {/* Draws the overlay on top of background image. Note opacity tag */}
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>

        {/* Not sure exactly what this does */}
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
          </svg>
        </div>

      </section>
      {/* END BACKGROUD */}

      {/* MAIN CONTENT CONTAINER */}
      <section className="relative py-12 bg-blueGray-200">
        <div className="container mx-auto px-4 mb-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">

              {/* TITLE */}
              <div className="text-center mt-12">
                <h2 className="text-5xl font-semibold leading-normal mb-2 text-blueGray-700">
                  Academic Wellness
                </h2>
              </div>

              {/* CONTENT */}
              {/* border-t draws the line */}
              <div className="mt-8 pt-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                    <h5 className="font-semibold text-2xl text-blueGray-600 mb-0">
                      What is Academic Wellness?
                    </h5>
                    <div className="text-base text-left font-light text-blueGray-800">
                      <p>
                        Academic Wellness is the management of academic workload and
                        and drive to keeping our minds open to new ideas and experiences in life.
                        Continuing to pursue your education is a journey to
                        acquire the skills and knowledge, as well as networks and connections,
                        to help you succeed in any career.
                      </p>

                      <p>
                        Many students feel that they are pressued to achieve academic success. It can be hard to
                        balance personal and academic wellness and can find that they are feeling overwhelmed.
                        Making sure that you have the tools you need is crucial for success. For instance,
                        where do you like to study? Knowing how to study effectively, regularly attending classes,
                        and managing your time are keys to great academic wellnesss.
                      </p>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Tips for Improving Academic Wellness
                    </h5>

                    <div className="text-base text-left font-light text-blueGray-800 pl-5">
                      <ul className="list-disc list-outside">
                        <li>The environment where you study matters. Where do you like to study? The library? At home? Coffee Shops? <a href="https://library.gmu.edu/locations/fenwick" className="text-lightBlue-300 underline">Fenwick</a> is
                          open from 8:00AM - 11:00PM and most GMU campus buildings are open from 7:30 a.m. to 11:00 p.m.</li>
                        <li>Find yourself behind on assignments? Try making a to-do list! or maintain a planner to keep track of all your assignments!</li>
                        <li>Meeting with your department advisors can be great for your four-year planning and academic concerns</li>
                        <li>Check out the <a href="https://stearnscenter.gmu.edu/knowledge-center/knowing-mason-students/student-support-resources-on-campus/" className="text-lightBlue-300 underline">university resources</a> for help on math, writing, and career services!</li>
                      </ul>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Resources
                    </h5>

                  </div>
                </div>
              </div>
              {/* END CONTENT */}

              {/* <!-- container for all cards --> */}
              <div className="container w-100 mx-auto flex flex-col px-auto mb-12 lg:w-9/12">

                {/* START CARD 1 */}
                <a href="https://extension.harvard.edu/blog/5-strategies-for-academic-success-using-your-strengths/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      {/* <div className="h-64 w-64"> */}
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://extension.harvard.edu/wp-content/uploads/sites/8/2018/10/academic-success.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        5 Strategies For Academic Success Using Your Strengths
                      </h4>
                      <p className="font-light">
                        The start of the semester can be a hectic time. You’re juggling your career, classes, family, and friends.
                        Deb Levy, a certified life and business coach, and a Harvard Extension career workshop leader,
                        offers five tips in this video to help you succeed in your coursework.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Harvard Extension &bull; Rebecca Bakken &bull; 11-01-2018
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 1 */}

                {/* START CARD 2 */}
                <a href="https://www.oxfordlearning.com/how-to-study-effectively/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://1en5vh48t4rqdnq1j3h9ihn4-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/AdobeStock_132869690-860x420.jpeg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        How To Study Effectively
                      </h4>
                      <p className="font-light">
                        Being properly organized and prepared for tests and exams can make all the
                        difference to school performance. Effective studying starts with the right
                        attitude—a positive outlook can shift studying from a punishment to an
                        opportunity to learn.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Oxford Learning &bull; 04-19-2017
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 2 */}

                {/* START CARD 3 */}
                <a href="https://www.forbes.com/sites/kevinkruse/2015/11/09/time-management-students/?sh=4e129d4c6a4c">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkevinkruse%2Ffiles%2F2015%2F11%2FStudents_wordcloud.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Time Management Secrets From 29 Straight-A Students
                      </h4>
                      <p className="font-light">
                        What does it take to maintain straight As at MIT or Harvard?...
                        The topic that most frequently came up was the lure of social media.
                        Almost everyone mentioned the siren call of Snapchat, Instagram and Facebook...
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Forbes &bull; Kevin Kruse &bull; 11-09-2015
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 3 */}

                {/* START CARD 4 */}
                <a href="https://advising.gmu.edu/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://advising.gmu.edu/wp-content/uploads/Metaslider-Image_Find-My-Advisor2-e1634582889370.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        GMU: Academic Advising
                      </h4>
                      <p className="font-light">
                        Academic advising at George Mason University is an integral part of the educational and
                        developmental process that enhances student success by supporting, teaching, and
                        connecting students to curricular and co-curricular experiences.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        George Mason University
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 4 */}

                {/* START CARD 5 */}
                <a href="https://stearnscenter.gmu.edu/knowledge-center/knowing-mason-students/student-support-resources-on-campus/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://advising.gmu.edu/wp-content/uploads/NewStudents-1024x684.jpg"
                      />
                    </div>

                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Student Support Resources on Campus
                      </h4>
                      <p className="font-light">
                        Click here to learn more about some of the student support resouces on campus. You can find
                        resources such as the writing center, mathematics tutoring center, and career services.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        George Mason University
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 5 */}
              </div> {/* END CARD CONTAINER */}
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
}
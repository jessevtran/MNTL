import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Career() {
  return (
    <>
      <IndexNavbar fixed />

      {/* BACKGROUND. DRAWS THE BLOCK ON TOP OF BACKGROUND*/}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
                  Career Wellness
                </h2>
              </div>

              {/* CONTENT */}
              {/* border-t draws the line */}
              <div className="mt-8 pt-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                    <h5 className="font-semibold text-2xl text-blueGray-600 mb-0">
                      What is Career Wellness?
                    </h5>
                    <div className="text-base text-left font-light text-blueGray-800">
                      <p>
                        Career wellness is an important aspect when it comes to an individual's sense purpose and productivity.
                        It involves being able to balance school work, jobs, and activities outside of work, also known as work-life balance.
                        It is important to consider that the career that you want to work in fits your skills and interests, and makes you feel
                        good about what you've accomplished. However, you should also make sure to put yourself first; your mental, emotional, and physical
                        wellbeing is most important.
                      </p>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Tips for Improving Career Wellness
                    </h5>

                    <div className="text-base text-left font-light text-blueGray-800 pl-5">
                      <ul className="list-disc list-outside">
                        <li>Ask yourself: are you thinking about a major that you find interesting and meaningful?</li>
                        <li>Create goals for yourself. What do you want to achieve in life? </li>
                        <li>Don't settle. Keep motivated and keep working towards your goals.</li>
                        <li>As a student, take advantage of the resources around you! Ask professors for insight and professional advice! Sign up for career fairs and workshops!</li>
                        <li>If your current job is stressful. Not enough personal time? Large tasks? reflect on your work-life balance and create new goals.</li>
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
                <a href="https://gmu.joinhandshake.com/login">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      {/* <div className="h-64 w-64"> */}
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210324110957-838763.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        George Mason University: Handshake
                      </h4>
                      <p className="font-light">
                        Check out Handshake, Mason's source of jobs, internships, and career fairs.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        HandShake
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 1 */}

                {/* START CARD 2 */}
                <a href="https://masononline.gmu.edu/university-career-services/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://careers.gmu.edu/sites/g/files/yyqcgq181/files/styles/feature_image_medium/public/2020-12/AppointmentPage.jpg?itok=pFX3gNN_"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        University Career Services
                      </h4>
                      <p className="font-light">
                        University Career Services serves all students – whether on campus or online. Our appointments,
                        career preparation courses, and workshops can help you choose a major and set tangible career goals.
                        We can assist you in creating a resume, networking with Mason alumni, and preparing for the
                        workplace or further study.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        George Mason University
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 2 */}

                {/* START CARD 3 */}
                <a href="https://introwellness.com/health/what-is-occupational-wellness/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://introwellness.com/wp-content/uploads/2018/09/What-Is-Occupational-Wellness-and-Why-Is-It-Important-696x464.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        What Is Occupational Wellness and Why Is It Important?
                      </h4>
                      <p className="font-light">
                        According to the World Health Association (WHO), most people spend 1/3 of their adult life at work... this is really a lot of time!
                        Therefore, understanding what occupational wellness is, why it's important, and how you can improve it, is vital to your workplace happiness.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        IntroWellness &bull; Ryan Corte &bull; 01-05-2020
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 3 */}
              </div> {/* END CARD CONTAINER */}
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
}
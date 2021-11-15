import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Social() {
  return (
    <>
      <IndexNavbar fixed />

      {/* BACKGROUND. DRAWS THE BLOCK ON TOP OF BACKGROUND*/}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
                  Social Wellness
                </h2>
              </div>

              {/* CONTENT */}
              {/* border-t draws the line */}
              <div className="mt-8 pt-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                    <h5 className="font-semibold text-2xl text-blueGray-600 mb-0">
                      What is Social Wellness?
                    </h5>
                    <div className="text-base text-left font-light text-blueGray-800">
                      <p>
                        Social Wellness is about building healthy relationships with others-whether they are
                        with romantic parters, friends, family, or professors. Research has shown that social ties influence
                        our health habits and "instill a sense of responsibility and concern for others that then lead individuals
                        to engage in behaviors that protect the health of others, as well as their own health." <a
                          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3150158/" className="text-lightBlue-300 underline">[1]
                        </a>
                      </p>

                      <p>
                        Additionally, it has been shown that relationships in the form of social support can enhance mental health
                        by reducing stress and can benefit immune, endocrine, and cardiovascular functions <a
                          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3150158/" className="text-lightBlue-300 underline">[1]
                        </a>. In other words, social interaction enhancing your well-being, and is associated with being healthier!
                      </p>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Tips for Improving Social Wellness
                    </h5>

                    <div className="text-base text-left font-light text-blueGray-800 pl-5">
                      <ul className="list-disc list-outside">
                        <li>Reflect on your social needs. What aspects of your social life do you enjoy? What parts would you like to improve?</li>
                        <li>School clubs and organizations are a great way to meet new people. You're more likely to make new friends who have similar interests!</li>
                        <li>Make an effort to keep in touch with supportive friends and family.</li>
                        <li>Get active together! Exercising with your friends is more fun and is a great way to build your relationships.</li>
                        <li>Ask yourself: How are you asking for help? Do you have friends you can count on?</li>
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
                <a href="https://www.nih.gov/health-information/social-wellness-toolkit">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      {/* <div className="h-64 w-64"> */}
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.nih.gov/sites/default/files/styles/sidebar_media_breakpoint-medium/public/health-info/wellness-toolkits/illustration-social%20connections-collage.jpg?itok=57g-np-U&timestamp=1491571991"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Social Wellness Toolkit
                      </h4>
                      <p className="font-light">
                        From the time you’re born, your relationships help you learn to navigate the world.
                        You learn how to interact with others, express yourself, conduct everyday health habits,
                        and be a part of different communities from those around you. Positive social habits
                        can help you build support systems and stay healthier mentally and physically.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        National Institutes of Health
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 1 */}

                {/* START CARD 2 */}
                <a href="https://mason360.gmu.edu/home_login">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://welcome2mason.gmu.edu/wp-content/uploads/2019/12/unnamed.png"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Mason360
                      </h4>
                      <p className="font-light">
                        Mason360 helps students join one of the more than 450 student
                        organizations on campus, connect with other Patriots and discover campus events. Students
                        can download Mason360 as an app at the Google Play Store and App Store or use
                        it on a desktop browser by visiting mason360.gmu.edu
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        George Mason University
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 2 */}

                {/* START CARD 3 */}
                <a href="https://www.myamericannurse.com/social-wellness-nurture-relationships/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.myamericannurse.com/wp-content/uploads/2018/07/social-wellness-nurture-relationships.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Social Wellness: Nuture Your Relationships
                      </h4>
                      <p className="font-light">
                        Social well-being can be defined as our ability to effectively interact with people around
                        us and to create a support system that includes family and friends. It fosters
                        connection with others and contributes to a sense of belonging, which is important for optimal wellness.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        MyAmericanNurse &bull; B. M. Melnyk, S. Neale &bull; 07-24-2018
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
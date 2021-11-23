import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";

export default function Spiritual() {
  return (
    <>
      <Head><title>Spiritual Wellness</title></Head>
      <IndexNavbar fixed />

      {/* BACKGROUND. DRAWS THE BLOCK ON TOP OF BACKGROUND*/}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
                  Spiritual Wellness
                </h2>
              </div>

              {/* CONTENT */}
              {/* border-t draws the line */}
              <div className="mt-8 pt-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                    <h5 className="font-semibold text-2xl text-blueGray-600 mb-0">
                      What is Spiritual Wellness?
                    </h5>
                    <div className="text-base text-left font-light text-blueGray-800">
                      <p>
                        Spiritual wellness means to find meaning and purpose in your life while also understanding the values,
                        beliefs, and morals that guide your actions. You don't have to be a religious individual, as spiritual wellness
                        also refers to how someone enjoys their lives. Having a stronger mind-body connection and deeper understanding
                        of yourself strengthens self-awareness which also supports how we think and behave. Overall, when we improve our
                        spiritual wellness, we strengthen relationships with ourselves and the people around us.
                      </p>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Tips for Improving Spiritual Wellness
                    </h5>

                    <div className="text-base text-left font-light text-blueGray-800 pl-5">
                      <ul className="list-disc list-outside">
                        <li>Asks yourself questions about your character and your meaning. For example, "What is my purpose?" "What do I value?" "What do I want to achieve?"
                          These questions will help think in-depth about yourself.</li>
                        <li>Try meditation. It does not need to be in a religious context; it; the process of relaxng the body, calming the mind, and being fully concentrated in the present.</li>
                        <li>Traveling can help take the mind off stressors and distractions which can help to reflect and reset. Shenandoah National Park is a great place to explore and is only 1.5 hours away from Fairfax, VA!</li>
                        <li>Journaling can help to express what's on our mind. Writing down your thoughts can help to reflect on events and think clearer.</li>
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
                <a href="https://www.betterup.com/blog/what-is-spiritual-wellness-and-why-is-it-so-important" target="_blank">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-lg hover:shadow-2xl ease-linear transition-all duration-150 mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      {/* <div className="h-64 w-64"> */}
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F700471687%2F960x0.jpg%3Ffit%3Dscale"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        How spiritual wellness unlocks creativity and resourcefulness
                      </h4>
                      <p className="font-light">
                        This article discusses spiritual wellness, and
                        how to improve it to build a more balanced life.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        BetterUp &bull; Amal Saymeh &bull; 01-26-2021
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 1 */}

                {/* START CARD 2 */}
                <a href="https://aaep.org/wellness/spiritual-wellness" target="_blank">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-lg hover:shadow-2xl ease-linear transition-all duration-150 mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://assets.aaep.org/sites/default/files/inline-images/spiritual%20wellness%20sun%20sky%20%28002%29.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Spiritual Wellness
                      </h4>
                      <p className="font-light">
                        Spiritual awareness is an expansive process of living each day,
                        at work and at home, in alignment with a sense of purpose and deeply held values.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        AAEP
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 2 */}

                {/* START CARD 3 */}
                <a href="https://medium.com/change-becomes-you/7-ways-to-strengthen-your-spiritual-wellness-d7ec5f2cae43" target="_blank">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-lg hover:shadow-2xl ease-linear transition-all duration-150 mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://miro.medium.com/max/630/1*dMpExppTon7rsSmvSAQK2A.jpeg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        7 Ways To Strengthen Your Spiritual Wellness
                      </h4>
                      <p className="font-light">
                        Grow your sense of connection, find meaning, embrace values and have faith.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Medium &bull; Benjamin Mumme
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
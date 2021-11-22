import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Head from "next/head";

export default function Career() {
  return (
    <>
      <Head><title>Environmental Wellness</title></Head>
      <IndexNavbar fixed />

      {/* BACKGROUND. DRAWS THE BLOCK ON TOP OF BACKGROUND*/}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
                  Environmental Wellness
                </h2>
              </div>

              {/* CONTENT */}
              {/* border-t draws the line */}
              <div className="mt-8 pt-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                    <h5 className="font-semibold text-2xl text-blueGray-600 mb-0">
                      What is Environmental Wellness?
                    </h5>
                    <div className="text-base text-left font-light text-blueGray-800">
                      <p>
                        Environmental wellness is having good health by occupying pleasant, stimulating environments
                        that support well-being. It promotes interaction with nature and also creating an enjoyable
                        personal environment (both in and out of your workspace). Everyone can have a strong environmental
                        conscious simply by raising their awareness and incorporating features that help to
                        make their setting more agreeable to them. When you become environmentally aware, you will be able
                        to realize how your daily habits affect your home life as well as your work life and results
                        in a more balanced lifestyle.
                      </p>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Tips for Improving Environmental Wellness
                    </h5>

                    <div className="text-base text-left font-light text-blueGray-800 pl-5">
                      <ul className="list-disc list-outside">
                        <li>Set up your workspace in a manner that is more efficient and comfortable.</li>
                        <li>Make your home healthier by cleaning with non-toxic products and washing your hands often.</li>
                        <li>Become aware of Earth’s natural resources. Identify and understand the role of our natural resources and how we can conserve them.</li>
                        <li>Conserve energy by turning off and unplugging electronics that are not in use.</li>
                        <li>Save water. Turn off water when brushing your teeth, shaving, or washing the dishes.</li>
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
                <a href="https://www.nih.gov/health-information/environmental-wellness-toolkit" target="_blank">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-lg hover:shadow-2xl ease-linear transition-all duration-150 mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      {/* <div className="h-64 w-64"> */}
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.nih.gov/sites/default/files/styles/sidebar_media_breakpoint-medium/public/health-info/wellness-toolkits/illustration-dad-mop-reading-bottle-label-kitchen-2.jpg?itok=VE8tE-bE&timestamp=1509548563"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Environmental Wellness Toolkit
                      </h4>
                      <p className="font-light">
                        What surrounds you each day in your home, work, or neighborhood and the resources available to you can affect your health.</p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        National Institutes of Health
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 1 */}

                {/* START CARD 2 */}
                <a href="https://medium.com/change-becomes-you/6-ways-to-enhance-your-environmental-wellness-2c915a374864" target="_blank">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-lg hover:shadow-2xl ease-linear transition-all duration-150 mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://miro.medium.com/max/1400/1*tVigoNVHg-26MpM6OnoMxQ.jpeg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        6 Ways To Enhance Your Environmental Wellness
                      </h4>
                      <p className="font-light">
                        What surrounds you each day in your home, work, or neighbourhood and the
                        resources available to you can affect your personal wellness. You can’t
                        always choose what’s in the environments you live, work, or play in. But
                        taking small steps to make your environments safer and limiting your
                        exposure to potentially harmful substances can help keep you healthier.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Medium &bull; Benjamin Mumme &bull; 04-14
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 2 */}

                {/* START CARD 3 */}
                <a href="https://www.forbes.com/sites/jamiegold/2019/11/21/health-and-wellness-surpass-conservation-in-popular-sustainability-conversations/" target="_blank">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-lg hover:shadow-2xl ease-linear transition-all duration-150 mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROa3WKLpHOW32YJY3MG4JS4WvtxJnOtRICSQ&usqp=CAU"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        When Making Your Home More Sustainable, Health And Wellness Are Also Part Of The Conversation
                      </h4>
                      <p className="font-light">
                        A funny thing happened on the way to sustainability: Consumers became aware that the toxins
                        environmental groups have been warning them about for decades are not just harmful to the
                        planet, but to their health as well, and that having an eco-friendly home is about much
                        more than saving money on their utilities.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Forbes &bull; Jamie Gold &bull; 11-21-2019
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
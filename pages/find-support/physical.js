import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Physical() {
  return (
    <>
      <IndexNavbar fixed />

      {/* BACKGROUND. DRAWS THE BLOCK ON TOP OF BACKGROUND*/}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
                  Physical Wellness
                </h2>
              </div>

              {/* CONTENT */}
              {/* border-t draws the line */}
              <div className="mt-8 pt-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                    <h5 className="font-semibold text-2xl text-blueGray-600 mb-0">
                      What is Physical Wellness?
                    </h5>
                    <div className="text-base text-left font-light text-blueGray-800">
                      <p>
                        Physical Wellness plays an important role in your overall well-being and success.
                        Not only does regular activity prevent diseases such as diabetes, heart disease,
                        and high blood pressure, it is essential for reducing stress and the affects of
                        depression and anxiety <a
                          href="https://www.tandfonline.com/doi/full/10.1080/08039480802315640" className="text-lightBlue-300 underline">[1]
                        </a>.
                      </p>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Tips for Improving Physical Wellness
                    </h5>

                    <div className="text-base text-left font-light text-blueGray-800 pl-5">
                      <ul className="list-disc list-outside">
                        <li>Aim for at least 150 minutes of physical activity each week!</li>
                        <li>Try to get at least eight hours of sleep per night.</li>
                        <li>Stay hydrated! Drink plenty of water throughout the day and avoid soda or beverages high in sugar.</li>
                        <li>You don't have to be an olympic athlete to be physically well! Do activities that you enjoy, and make them part of your daily routine.</li>
                        <li>Track your progress. Start small and build up i.e. If you're walking, slowly increase walking time/distance.</li>
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
                <a href="https://www.nih.gov/health-information/physical-wellness-toolkit">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      {/* <div className="h-64 w-64"> */}
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.nih.gov/sites/default/files/styles/sidebar_media_breakpoint-medium/public/health-info/wellness-toolkits/illustration-healthy-foods.jpg?itok=IID7Hs8-&timestamp=1630000423"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Physical Wellness Toolkit
                      </h4>
                      <p className="font-light">
                        Watching what you put into your body, how much activity you get, and your
                        weight are important for keeping your body working properly. Positive physical health
                        habits can help decrease your stress, lower your risk of disease, and increase your energy.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        National Institutes of Health
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 1 */}

                {/* START CARD 2 */}
                <a href="https://shs.gmu.edu/healthed/exercise/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://d.newsweek.com/en/full/1555830/running-exercise-fitness-stock-getty.jpg?w=1600&h=1600&q=88&f=dbcf98ae7841924284885044416c5eb3"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Student Health Services: Exercise
                      </h4>
                      <p className="font-light">
                        Is “sitting” the “new smoking”? As far as the harmful effects that an inactive
                        lifestyle carries; this question is definitely worth thinking about. The healthcare providers
                        at Student Health Services would write many prescriptions for regular exercise if that would
                        motivate people to discover the benefits!
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        George Mason University
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 2 */}

                {/* START CARD 3 */}
                <a href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/why-is-physical-activity-so-important-for-health-and-wellbeing">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.heart.org/-/media/AHA/H4GM/Article-Images/PA-Improves-Quality-of-Life-520047182.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Why is Physical Activity So Important For Health And Well-Being?
                      </h4>
                      <p className="font-light">
                        We know that staying active is one of the best ways to keep our bodies healthy.
                        But did you know it can also improve your overall well-being and quality of life?
                        Here are just a few of the ways physical activity can help you feel better, look better and live better. Because, why not?
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        American Heart Association &bull; 01-14-2017
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
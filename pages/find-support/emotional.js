import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Emotional() {
  return (
    <>
      <IndexNavbar fixed />

      {/* BACKGROUND. DRAWS THE BLOCK ON TOP OF BACKGROUND*/}
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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
                  Emotional Wellness
                </h2>
              </div>

              {/* CONTENT */}
              {/* border-t draws the line */}
              <div className="mt-8 pt-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">

                    <h5 className="font-semibold text-2xl text-blueGray-600 mb-0">
                      What is Emotional Wellness?
                    </h5>
                    <div className="text-base text-left font-light text-blueGray-800">
                      <p>
                        Emotional Wellness is the <a className="font-medium">awareness, understanding, and acceptance</a> of your emotions as well
                        as the ability to manage and persevere through challenges and change <a href="https://www.nationalcenterforemotionalwellness.org/" className="text-lightBlue-300 underline">
                          [1]</a>. For students, many of these challenges include stress and anxiety, and often lead to feeling overwhelmed.
                        Beginning to better understand how we react and respond to these challenges is a part of emotional wellness and can help us
                        attain emotional balance.
                      </p>

                      <p>
                        Remember that emotional wellness is a journey which requires time and practice. Learning to
                        identify your feelings, employ coping mechanisms, and persevering, enables you to achieve overall health and well-being.
                        Being emotionally well does not mean that you are happy 24/7, but rather, that you're self-aware and able accept your feelings in a positive way.
                        <a className="font-medium"> You're not alone</a>, and there are plenty of tools and resources, including professional help, that you can seek for support.
                      </p>
                    </div>

                    <h5 className="font-semibold text-2xl text-blueGray-600 pt-8">
                      Tips for Improving Emotional Wellness
                    </h5>

                    <div className="text-base text-left font-light text-blueGray-800 pl-5">
                      <ul className="list-disc list-outside">
                        <li>Practice self-acceptance. Give yourself more credit for your accomplishments.</li>
                        <li>Forgive yourself. Everyone makes mistakes in life, so learn from the things that went wrong, and move on.</li>
                        <li>Be patient. Adapting to change takes time, but it is inevitable and provides invaluable opportunities for growth.</li>
                        <li><a href="https://www.mindful.org/how-to-practice-mindfulness/" className="text-lightBlue-300 underline">Practice mindfulness</a>, the act of becoming more aware of where you are and what you're doing.</li>
                        <li>Build a strong support system. Try to get active with friends, or join a group with similar hobbies. Learn more on our page about <Link href="/find-support/social"><a className="text-lightBlue-300 underline">Social Wellness</a></Link>.</li>
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
                <a href="https://www.nih.gov/health-information/emotional-wellness-toolkit">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      {/* <div className="h-64 w-64"> */}
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.nih.gov/sites/default/files/styles/sidebar_media_breakpoint-medium/public/health-info/wellness-toolkits/illustration-hiker-watching-sunset-2.jpg?itok=Lpv9O2bX&timestamp=1630422036"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Social Wellness Toolkit
                      </h4>
                      <p className="font-light">
                        How you feel can affect your ability to carry out everyday activities, your relationships, and your overall mental health.
                        How you react to your experiences and feelings can change over time. Emotional wellness is the ability to successfully
                        handle life’s stresses and adapt to change and difficult times.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        National Institutes of Health
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 1 */}

                {/* START CARD 2 */}
                <a href="https://www.mindful.org/how-to-practice-mindfulness/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://i2.wp.com/www.mindful.org/content/uploads/HowtoPracticeMindfulness.jpg?w=740&ssl=1"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        How to Practice Mindfulness
                      </h4>
                      <p className="font-light">
                        Mindfulness is a natural quality that we all have. It’s available to us in every moment
                        if we take the time to appreciate it. When we practice mindfulness, we’re practicing
                        the art of creating space for ourselves—space to think, space to breathe, space
                        between ourselves and our reactions.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Mindful &bull; 12-12-2018
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 2 */}

                {/* START CARD 3 */}
                <a href="https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.helpguide.org/wp-content/uploads/illustration-gears-in-head-768.jpg"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Building Better Mental Health
                      </h4>
                      <p className="font-light">
                        Your mental health influences how you think, feel, and behave in daily life.
                        It also affects your ability to cope with stress, overcome challenges,
                        build relationships, and recover from life’s setbacks and hardships.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        HelpGuide &bull; M. Smith, R. Segal, L. Robinson, J. Segal &bull; 08-01-2021
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 3 */}

                {/* START CARD 4 */}
                <a href="https://www.sanvello.com/">
                  {/* <!-- card --> */}
                  <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-50 rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-32 w-auto md:w-1/2">
                      <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src="https://www.sanvello.com/wp-content/uploads/2019/06/icon-sanvello.png"
                      />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                      <h4 className="text-2xl font-semibold leading-tight overflow-hidden">
                        Sanvello
                      </h4>
                      <p className="font-light">
                        A place to feel better: Sanvello gives you clinically proven therapies for dealing with stress, anxiety, depression, or '
                        anything eles you may be going through. Find relief when you need it and feel happier over time. Available on Apple and Play Store.
                      </p>
                      <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        Sanvello
                      </p>
                    </div> {/* END CONTENT */}
                  </div> {/* END TEXT */}
                </a> {/* END CARD 4 */}
              </div> {/* END CARD CONTAINER */}
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
}
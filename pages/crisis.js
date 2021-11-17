import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Head from "next/head";
import Footer from "components/Footers/Footer.js";

const crisis = () => {
  // This purpose of this page is to display cards containing emergency contact numbers.
  return (
    <>
      {/* Displays Crisis as title of the tab of web browser. */}
      <Head>
        <title>Crisis</title>
      </Head>
      {/* Navigation bar */}
      <IndexNavbar fixed />
      {/* The Body of the page starts here. */}
      <div className="pt-20 pb-24 bg-white">
        <div>
          {/* container for all cards*/}
          <div className="container w-100 mx-auto flex flex-col px-12 mb-12 lg:w-9/12">
            {/* First card */}
            <a
              href="https://www.fairfaxcounty.gov/police/fairfax-county-police-department"
              target="_blank"
            >
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2"
              >
                {/* media */}
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-cover object-center"
                    src="https://media.istockphoto.com/vectors/emergency-call-call-phone-in-hand-vector-illustration-vector-id688494412?k=20&m=688494412&s=612x612&w=0&h=zk6OfPoEbZRHpdIebIRVKww-AC2qsO8IIFtzjLlrMBs="
                  />
                </div>
                {/* content */}
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h4 className="text-2xl font-bold leading-normal mt-0 mb-2 text-black">
                    What To Do During An Emergency Situation?
                  </h4>
                  <p className="text-base font-normal leading-relaxed mt-0 mb-3 text-blueGray-800">
                    If you or someone you know is experiencing a mental health
                    crisis or if you ever feel that you or someone else requires
                    immediate medical attention:
                  </p>
                  <span className="mb-4 border-t border-blueGray-300">
                    Please, Contact <strong>911</strong> immediately for
                    assistance.
                  </span>
                </div>
              </div>
            </a>
            {/* First card Ends */}
            {/* Second card */}
            <a href="https://suicidepreventionlifeline.org" target="_blank">
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2"
              >
                {/* media */}
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-fill object-center"
                    src="https://suicidepreventionlifeline.org/wp-content/uploads/2016/08/NSPL_Logo.jpg"
                  />
                </div>
                {/* content */}
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h4 className="text-2xl font-bold leading-normal mt-0 mb-2 text-black">
                    Suicide Prevention Information
                  </h4>
                  <p className="text-base font-normal leading-relaxed mt-0 mb-3 text-blueGray-800">
                    If you are actively threatening to hurt yourself, thinking
                    about suicide, or need emotional support, help is available
                    24/7.
                  </p>
                  <span className="mb-4 border-t border-blueGray-300">
                    Please, contact <strong>800-273-8255</strong>
                  </span>
                </div>
              </div>
            </a>
            {/* Second card Ends */}
            {/* Third card */}
            <a href="https://www.crisistextline.org/" target="_blank">
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2"
              >
                {/* media */}
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-fill object-center"
                    src="https://images.squarespace-cdn.com/content/v1/5c0c00c1e74940cdaa7af6a1/1550687226454-QF2ZB5MGBX5NVP7SSDCT/Crisis+text+line"
                  />
                </div>
                {/* content */}
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h4 className="text-2xl font-bold leading-normal mt-0 mb-2 text-black">
                    In A Crisis?
                  </h4>
                  <p className="text-base font-normal leading-relaxed mt-0 mb-3 text-blueGray-800">
                    If you ever feel like your health is worsening, If you need
                    to talk to someone, or If you want to share your feelings
                    with a qualified counselor
                  </p>
                  <span className="mb-4 border-t border-blueGray-300">
                    Please, do not hasitate and text <strong>Home</strong> to{" "}
                    <strong>741-741</strong>
                  </span>
                </div>
              </div>
            </a>
            {/* Third card Ends */}
            {/* Fourth card */}
            <a href="https://www.rainn.org/" target="_blank">
              <div
                v-for="card in cards"
                className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2"
              >
                {/* media */}
                <div className="h-64 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-fill object-center"
                    src="https://pbs.twimg.com/media/EPAnqiVWkAIXCoN.jpg"
                  />
                </div>
                {/* content */}
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h4 className="text-2xl font-bold leading-normal mt-0 mb-2 text-black">
                    National Sexual Assault Hotline
                  </h4>
                  <p className="text-base font-normal leading-relaxed mt-0 mb-3 text-blueGray-800">
                    If you or someone you know has been a victim of sexual
                    assault, if you need Information about laws related to sex
                    crimes in your state, or if you want to tell your story,
                  </p>
                  <span className="mb-4 border-t border-blueGray-300">
                    Contact <strong>800-656-4673</strong> for help and resources
                  </span>
                </div>
              </div>
            </a>
            {/* Fourth card Ends */}
          </div>
        </div>
      </div>
      {/* Body ends here */}
      <Footer fixed />
    </>
  );
};
export default crisis;

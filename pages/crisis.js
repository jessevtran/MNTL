import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Head from "next/head";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

const crisis = () => {
  //TODO: STYLE THE CARDS
  //Card Text Format
  //Title of Service -- h5 from Notus.docs, black | replace font-normal -> font-bold
  //Phone Number -- lead from Notus.docs
  //Description -- p, text-lg or medium | replace font-light -> font-normal

  return (
    <>
      <Head>
        <title>Crisis</title>
      </Head>
      <IndexNavbar fixed />
      <div className="pt-20 pb-24 bg-white">
        <div>
          {/* container for all cards*/}
          <div className="container w-100 mx-auto flex flex-col px-12 mb-12 lg:w-9/12">
            {/* First card */}
            <Link href="https://www.fairfaxcounty.gov/police/fairfax-county-police-department">
              <a>
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2">
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
                    <p className="text-base font-normal leading-relaxed mt-0 mb-4 text-blueGray-800">
                      If you or someone you know is experiencing a mental health crisis or
                      if you ever feel that you or someone else requires immediate medical attention:
                    </p>
                    <span>
                      Please, Contact <strong>911</strong> immediately for assistance.
                    </span>
                  </div>
                </div>
              </a>
            </Link>
            {/* First card Ends */}

            {/* Second card */}
            <Link href="https://suicidepreventionlifeline.org">
              <a>
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2">
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
                    <p className="text-base font-normal leading-relaxed mt-0 mb-4 text-blueGray-800">
                      If you are actively threatening to hurt yourself, thinking about suicide,
                      or need emotional support, help is available 24/7.
                    </p>
                    <span>
                      Please, contact <strong>800-273-8255</strong>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
            {/* Second card Ends */}

            {/* Third card */}
            <Link href="https://www.crisistextline.org/">
              <a>
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2">
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
                    <p className="text-base font-normal leading-relaxed mt-0 mb-4 text-blueGray-800">
                      If you ever feel like your health is worsening, If you need to talk to someone, or If you
                      want to share your feelings with a qualified counselor
                    </p>
                    <span>
                      Please, do not hasitate and text <strong>Home</strong> to <strong>741-741</strong>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
            {/* Third card Ends */}

            {/* Fourth card */}
            <Link href="https://www.rainn.org/">
              <a>
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-blueGray-100 rounded-lg hover:shadow-lg mt-4 w-100 mx-2">
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
                    <p className="text-base font-normal leading-relaxed mt-0 mb-4 text-blueGray-800">
                      If you or someone you know has been a victim of sexual assault, if you need Information about laws related to sex crimes in your state,
                      or if you want to tell your story,
                    </p>
                    <span>
                      Contact <strong>800-656-4673</strong> for help and resources
                    </span>
                  </div>
                </div>
              </a>
            </Link>
            {/* Fourth card Ends */}
          </div>
        </div>
      </div>
      <Footer fixed />
    </>
  );
};
export default crisis;

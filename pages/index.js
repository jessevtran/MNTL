/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('img/bg_index_page.png')",
              backgroundPosition:
                "center -300px",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center mt-0 mb-4">
                <div className="pr-12">
                  <h1 className="text-blueGray-100 font-semibold text-5xl">
                    Welcome to MNTL
                  </h1>

                  <h1 className="text-blueGray-100 font-semibold text-1xl mt-4 mb-10">
                    Build better habits and routines with the MNTL App!
                  </h1>
                  <h4 className="text-3xl font-normal leading-normal mt-10 mb-0 text-blueGray-200 m-10">
                    Take the quiz to find the best resources, routines, and communities for you to improve your mental and physical health!
                  </h4>
                </div>
              </div>
            </div>
          </div>
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
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Explore</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Navigate through our website using our navigation bar above.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-comment-dots"></i>
                    </div>
                    <h6 className="text-xl font-semibold"> About </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Find out who created this application by scrolling below.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Confidentality</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      MNTL does not keep any information stored for our quiz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a href="/find-support/">
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto inline-block">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg hover:shadow-2xl rounded-lg bg-blueGray-700">
                    <img
                      alt="..."
                      src="/img/support_index_page.png"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-blueGray-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Find Support.
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Our Find Support Page provides resources that could benefit you.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </a>

              <a href="/wellness-quiz/">
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto inline-block">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg hover:shadow-2xl rounded-lg bg-blueGray-700">
                    <img
                      alt="..."
                      src="/img/quiz_index_page.png"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-blueGray-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Take Our Quiz.
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Our Quiz will help you find the best resources, routines, and communities.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </a>

              <a href="/crisis">
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto inline-block">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg hover:shadow-2xl rounded-lg bg-blueGray-700">
                    <img
                      alt="..."
                      src="/img/crisis_index_page.png"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-blueGray-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        In a CRISIS?
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Your safety is important to us. Find information on this page if you're in a emergency situation.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/img/IMG_7694.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">About us</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The 4 individuals who created this application:
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Jesse Tran
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Nnamdi Ojibe
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Sayed Fekrat
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            David Hoang
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">The Team</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  MNTL team composition:
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/jesse_profile.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jesse Tran</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Technical Lead
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/nnamdi_profile.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nnamd Ojibe</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Team Leader
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/sayed_profile.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sayed Fekrat</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Project Manager
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/david_profile.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">David Hoang</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      QA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION FOR SUGGESTED ARTICLES */}
        {/* <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Recommended Articles from the Find Support Page
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Explore helpful articles that could benefit you.
                </p>
              </div>
            </div>

            <div className="card" style={{ margin: "170px 0 100px 150px" }}>
              <div className="relative flex flex-row min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src=""
                  className="w-full align-middle rounded-t-lg"
                  style={{ height: "200px", width: "300px" }}
                />
                <blockquote className="relative p-4 mb-3">
                  <h4 className="text-l font-bold text-white">
                    Article 1
                  </h4>
                </blockquote>
              </div>
            </div>
          </div>
        </section> */}


      </main>
      <Footer />
    </>
  );
}

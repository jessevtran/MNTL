import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Head from "next/head";

const crisis = () => {
  return (
    <>
      <style jsx>{`
        p {
          font-size: larger;
          text-align: center;
        }
        .paragraphStyle {
          color: red;
          font-size: x-large;
        }
      `}</style>
      <Head>
        <title>Crisis</title>
      </Head>
      <IndexNavbar fixed/>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-3xl text-blueGray-600 pt-6">
                <li>
                  In Case of Emergency: Dial <u style={{ color: "red" }}>911</u>
                </li>
              </h2>
              <div>
                <h2 className="font-semibold text-3xl text-blueGray-600 pt-12">
                  <li>National Suicide Prevention Lifeline:</li>
                </h2>
                <p>Hours: Available 24 hours. Languages: English, Spanish.</p>
                <p className="paragraphStyle">
                  <strong>800-273-8255</strong>
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-3xl text-blueGray-600 pt-12">
                  <li>In a Crisis?</li>
                </h2>
                <p>Crisis Text Hotline:</p>
                <p className="paragraphStyle">
                  <strong>Text HOME to 741741</strong>
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-3xl text-blueGray-600 pt-12">
                  <li>Assault Helpline:</li>
                </h2>
                <p>Sexual Assault Hotline:</p>
                <p className="paragraphStyle">
                  <strong>800.656.4673</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>
    </>
  );
};

export default crisis;

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Head from "next/head";
import Link from "next/link";
import Footer from "components/Footers/Footer.js";

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
        .cardBox {
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
        }

        .card {
          /* Add shadows to create the "card" effect */
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 800px;
          height: 200px;
          margin-bottom: auto;
          margin-left: 150px;
        }
        h4 {
          text-align: center;
        }
      `}</style>
      <Head>
        <title>Crisis</title>
      </Head>
      <IndexNavbar fixed />
      <section>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>
      <section className="cardBox">
        <div className="card" style={{ margin: "170px 0 100px 150px" }}>
          <div className="relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
            <img
              alt="..."
              src="https://media.istockphoto.com/vectors/emergency-call-call-phone-in-hand-vector-illustration-vector-id688494412?k=20&m=688494412&s=612x612&w=0&h=zk6OfPoEbZRHpdIebIRVKww-AC2qsO8IIFtzjLlrMBs="
              className="w-full align-middle rounded-t-lg"
              style={{ height: "200px", width: "300px" }}
            />
            <blockquote className="relative p-4 mb-3">
              <h4 className="text-l font-bold text-white">
                In Cases of Emergency Dial 911
              </h4>
            </blockquote>
          </div>
        </div>
        <div className="card" style={{ margin: "0 0 100px 150px" }}>
          <div className="relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
            <Link href="https://suicidepreventionlifeline.org/">
              <a>
                <img
                  alt="..."
                  src="https://suicidepreventionlifeline.org/wp-content/uploads/2016/08/NSPL_Logo.jpg"
                  className="w-full align-middle rounded-t-lg"
                  style={{ height: "200px", width: "300px" }}
                />
              </a>
            </Link>
            <blockquote className="relative p-4">
              <h4 className="text-l font-bold text-white">
                Available 24 hours
              </h4>
            </blockquote>
          </div>
        </div>
        <div className="card">
          <div className="relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
            <Link href="https://www.rainn.org/">
              <a>
                <img
                  alt="..."
                  src="https://pbs.twimg.com/media/EPAnqiVWkAIXCoN.jpg"
                  className="w-full align-middle rounded-t-lg"
                  style={{ height: "200px", width: "300px" }}
                />
              </a>
            </Link>
            <blockquote className="relative p-4">
              <h4 className="text-xl font-bold text-white">
                Healing and Recovery Starts Here
              </h4>
            </blockquote>
          </div>
        </div>
        <div className="card" style={{ margin: "100px 0 100px 150px" }}>
          <div className="relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
            <Link href="https://www.crisistextline.org/">
              <a>
                <img
                  alt="..."
                  src="https://images.squarespace-cdn.com/content/v1/5c0c00c1e74940cdaa7af6a1/1550687226454-QF2ZB5MGBX5NVP7SSDCT/Crisis+text+line"
                  className="w-full align-middle rounded-t-lg"
                  style={{ height: "200px", width: "300px" }}
                />
              </a>
            </Link>
            <blockquote className="relative p-4">
              <h4 className="text-xl font-bold text-white">In Crisis?</h4>
            </blockquote>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default crisis;

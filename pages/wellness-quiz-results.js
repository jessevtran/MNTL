import React, { useState, useEffect } from "react";

import CardBarChart from "components/Forms/WellnessAssessment/CardBarChart.js";
import Recommendations from "components/Forms/WellnessAssessment/Recommendations";
import Head from "next/head";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useRouter } from "next/router";

export default function WellnessQuizResults() {
  // const [results, setResults] = useState(null);

  const router = useRouter();
  const { query } = router;
  const results = JSON.parse(query.data);
  console.log("Passed in results from wellness form", results);

  return (
    <>
      <Head>
        Wellness-Quiz-Results
      </Head>

      <IndexNavbar />
      <div className="header relative pt-16 items-center flex ">
        <div className="container mx-auto justify-center flex">
          <div className="w-full px-4 my-4">

            <div>
              <h2 className="font-semibold text-6xl text-blueGray-600 pt-20">
                Your Results
              </h2>
            </div>

            <CardBarChart results={results} className="my-6"/>
            <Recommendations results={results} />

          </div>
        </div>
      </div>

      {/* Spacing for footer */}
      <div className="py-12" />
      <Footer />
    </>
  );
}
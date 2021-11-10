import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Career() {
  return (
    <>
      <IndexNavbar fixed />

      {/* <section className="header relative pt-16 items-center flex h-screen max-h-860-px"> */}
      <section className="relative pt-48 items-center flex h-screen max-h-860-px mb-48">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600 mb-8">
                Social Wellness
              </h2>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mb-0">
              What is Social Wellness?
            </h3>

            <div className="text-base font-light leading-relaxed mt-0 mb-6 text-blueGray-800 pt-0">
              <p>
                Social Wellness is about building healthy relationships with others-whether they are
                with romantic parters, friends, family, or professors. Research has shown that social ties influence
                our health habits and "instill a sense of responsibility and concern for others that then lead individuals
                to engage in behaviors that protect the health of others, as well as their own health." <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3150158/" className="text-lightBlue-300 underline">[1]
                </a>
              </p>
              <p className="mt-2">
                Additionally, it has been shown that relationships in the form of social support can enhance mental health
                by reducing stress and can benefit immune, endocrine, and cardiovascular functions <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3150158/" className="text-lightBlue-300 underline">[1]
                </a>. In other words, social interaction enhancing your well-being, and is associated with being healthier!
              </p>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mt-4">
              Tips For Improving Social Wellness
            </h3>

            <div className="mb-6 pl-5 font-light text-blueGray-800">
              <ul className="list-disc list-outside">
                <li>Reflect on your social needs. What aspects of your social life do you enjoy? What parts would you like to improve?</li>
                <li>School clubs and organizations are a great way to meet new people. You're more likely to make new friends who have similar interests!</li>
                <li>Make an effort to keep in touch with supportive friends and family.</li>
                <li>Get active together! Exercising with your friends is more fun and is a great way to build your relationships.</li>
                <li>Ask yourself: How are you asking for help? Do you have friends you can count on?</li>
              </ul>
            </div>

            <div className="font-semibold text-2xl text-blueGray-600 mb-0">
              <h3>
                Resources TODO: BOXES FOR LIST ENTRIES
              </h3>
            </div>

            <div className="mb-24 pl-5 font-light text-blueGray-800">
              <ul className="list-disc list-outside">
                <li><a href="https://www.nih.gov/health-information/social-wellness-toolkit" className="text-lightBlue-300 underline">National Institute of Health: Social Wellness Toolkit</a></li>
                <li><a href="https://mason360.gmu.edu/home_login" className="text-lightBlue-300 underline"> Mason360 </a></li>
                <li><a href="https://www.myamericannurse.com/social-wellness-nurture-relationships/" className="text-lightBlue-300 underline"> Social Wellness: Nurture your relationships </a></li>
              </ul>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>
      <Footer />
    </>
  );
}
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Emotional() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="relative pt-48 items-center flex h-screen max-h-860-px mb-48">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-12">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600 mb-8">
                Emotional Wellness
              </h2>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mb-0">
              What is Emotional Wellness?
            </h3>

            <div className="text-base font-light leading-relaxed mt-0 mb-6 text-blueGray-800 pt-0">
              <p>
                Emotional Wellness is the <a className="font-medium">awareness, understanding, and acceptance</a> of your emotions as well
                as the ability to manage and persevere through challenges and change <a href="https://www.nationalcenterforemotionalwellness.org/" className="text-lightBlue-300 underline">
                  [1]</a>. For students, many of these challenges include stress and anxiety, and often lead to feeling overwhelmed.
                Beginning to better understand how we react and respond to these challenges is a part of emotional wellness and can help us
                attain emotional balance.
              </p>
              <p className="mt-2">
                Remember that emotional wellness is a journey which requires time and practice. Learning to
                identify your feelings, employ coping mechanisms, and persevering, enables you to achieve overall health and well-being.
                Being emotionally well does not mean that you are happy 24/7, but rather, that you're self-aware and able accept your feelings in a positive way.
                <a className="font-medium"> You're not alone</a>, and there are plenty of tools and resources, including professional help, that you can seek for support.
              </p>
            </div>

            <h3 className="font-semibold text-2xl text-blueGray-600 mt-4">
              Tips For Improving Emotional Wellness
            </h3>

            <div className="mb-6 pl-5 font-light text-blueGray-800">
              <ul className="list-disc list-outside">
                <li>Self-acceptance. Give yourself more credit for your accomplishments.</li>
                <li>Forgive yourself. Everyone makes mistakes in life, so learn from the things that went wrong, and move on.</li>
                <li>Be patient. Adapting to change takes time, but it is inevitable and provides invaluable opportunities for growth.</li>
                <li><a href="https://www.mindful.org/how-to-practice-mindfulness/" className="text-lightBlue-300 underline">Practice mindfulness</a>, the act of becoming more aware of where you are and what you're doing.</li>
                <li>Build a strong support system. Try to get active with friends, or join a group with similar hobbies. Learn more on our page about <Link href="/find-support/social"><a className="text-lightBlue-300 underline">Social Wellness</a></Link>.</li>
              </ul>
            </div>

            <div className="font-semibold text-2xl text-blueGray-600 mb-0">
              <h3>
                Resources TODO: BOXES FOR LIST ENTRIES
              </h3>
            </div>

            <div className="mb-24 pl-5 font-light text-lightBlue-300 underline">
              <ul className="list-disc list-outside">
                <li><a href="https://www.nih.gov/health-information/emotional-wellness-toolkit">National Institutes of Health: Social Wellness Toolkit</a></li>
                <li><a href="https://www.mindful.org/how-to-practice-mindfulness/">Mindful.org: How to Practice Mindfulness</a></li>
                <li><a href="https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm">Helpguide.org: Building Better Mental Health</a></li>
                <li><a href="https://www.sanvello.com/">Sanvello, an app for helping to manage stress, anxiety, and depression.</a></li>
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
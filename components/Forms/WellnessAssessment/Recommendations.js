import React, { useEffect, useState } from "react";
import searchDB from "utils/search_db.json"


export default function Recommendations(props) {
  const [showMe, setShowMe] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [searchURL, setSearchURL] = useState("");
  const [resultsArr, setResultsArr] = useState([]);
  const [recommended, setRecommended] = useState("");

  const labels = Object.keys(props.results);
  const values = Object.values(props.results);

  /**
   * Runs request for SerpAPI to retrieve list of articles to "dynamically" load
   * @param {*} searchTerm to be inputted into the google search parameters
   * @returns nothing, loads values into a json so we can manipulate and use the data
   */
  const runSearchApi = (searchTerm) => {
    console.group("Search API debug:");
    console.log("Searching for: ", searchTerm);

    /*
    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("0090a115a59ac9e297463882541cfa9dc371dc98b2a6bd1f126848e8aae2a383");

    console.log("SerpApi", SerpApi);
    console.log("search", search);

    const params = {
      engine: "google",
      q: searchTerm,
      location: "United States",
      google_domain: "google.com",
      gl: "us",
      hl: "en"
    };
    console.log("parameters:", params);

    const callback = function (data) {
      console.log(data.organic_results);
    };
    // Show result as JSON
    search.json(params, callback);
    */

    const category = searchDB[searchTerm];
    const url = category.search_metadata.google_url;
    setSearchURL(url);

    const organic_results = shuffle(category.organic_results);
    for (let i = 0; i < 3; i++) {
      let current = organic_results[i];
      let cardInfo = { position: current.position, title: current.title, link: current.link, displayed_link: current.displayed_link, snippet: current.snippet };
      setResultsArr(resultsArr => [...resultsArr, cardInfo]);
    }

    console.groupEnd();
    return null;
  }

  /**
   * https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
   * I thought there'd be a built in function or something but this works well
   * @param {*} array input array to shuffle
   * @returns shuffled array
   */
  const shuffle = (array) => {
    var i = array.length,
      j = 0,
      temp;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  /**
   * Button handler to display or undisplay recommendations
   * @returns nothing
   */
  const displayRecommendations = () => {
    setShowMe(!showMe);

    // Only running this block once
    if (hasTriggered == false) {

      let indexOfLowestValue = 0;
      for (let i = 1; i < values.length; i++) {
        if (values[i] < values[indexOfLowestValue]) {
          indexOfLowestValue = i;
        }
      }
      //this is our search term
      const q = labels[indexOfLowestValue];
      setRecommended(q);

      setHasTriggered(true); // hasSearchAPIRan = true;
      runSearchApi(q);
    } // nothing will happen when hasTriggered = true 

    return null;
  }

  const DisplayCards = () => {
    let defaultSnippet = "";
    switch (recommended) {
      case labels[0]: // Emotional
        defaultSnippet = "Coping effectively, having a sense of positive self-regard, and creating satisfying relationships.";
        break;
      case labels[1]: // Environmental
        defaultSnippet = "Occupying pleasant, stimulating environments that support well-being.";
        break;
      case labels[1]: // Intellectual
        defaultSnippet = "Recognizing ways to expand knowledge and skills through intellectually stimulating activities.";
        break;
      case labels[1]: // Physical
        defaultSnippet = "Recognizing the need for physical activity, healthy foods, and sleep.";
        break;
      case labels[1]: // Occupational
        defaultSnippet = "Personal satisfaction and enrichment from one's work.";
        break;
      case labels[1]: // Social
        defaultSnippet = "Developing a sense of connection, belonging, and a well-developed support system.";
        break;
      case labels[1]: // Spiritual
        defaultSnippet = "Attending to our sense of purpose and meaning in life.";
        break;
    }

    return (
      <>
        {/* START OF CONTAINER */}
        <div className="container p-8 grid grid-cols-1 gap-5">

          {/* CARD 1 */}
          <a href={"/find-support/" + recommended.toLowerCase()} target="_blank" >
            <div className="rounded-lg overflow-hidden bg-blueGray-100 shadow-xl hover:shadow-2xl ease-linear transition-all duration-150">
              <div className="px-6 py-4 min-w-250-px min-h-150-px" >
                <h4 className="text-2xl font-bold leading-normal mt-0 text-blueGray-800">
                  {recommended + " Wellness"}
                </h4>
                <h5 className="truncate text-lg">
                  {"MNTL › Find Support › " + recommended + " Wellness"}
                </h5>
                <p className="text-gray-700 text-sm ">
                  {defaultSnippet}
                </p>
              </div>
            </div>
          </a>

          {/* CARD 2 */}
          <a href={resultsArr[0].link} target="_blank" >
            <div className="rounded-lg overflow-hidden bg-blueGray-100 shadow-xl hover:shadow-2xl ease-linear transition-all duration-150">
              <div className="px-6 py-4 min-w-250-px min-h-150-px" >
                <h4 className="text-2xl font-bold leading-normal mt-0 text-blueGray-800">
                  {resultsArr[0].title}
                </h4>
                <h5 className="truncate text-lg">
                  {resultsArr[0].displayed_link}
                </h5>
                <p className="text-gray-700 text-sm ">
                  {resultsArr[0].snippet}
                </p>
              </div>
            </div>
          </a>

          {/* CARD 3 */}
          <a href={resultsArr[1].link} target="_blank" >
            <div className="rounded-lg overflow-hidden bg-blueGray-100 shadow-xl hover:shadow-2xl ease-linear transition-all duration-150">
              <div className="px-6 py-4 min-w-250-px min-h-150-px" >
                <h4 className="text-2xl font-bold leading-normal mt-0 text-blueGray-800">
                  {resultsArr[1].title}
                </h4>
                <h5 className="truncate text-lg">
                  {resultsArr[1].displayed_link}
                </h5>
                <p className="text-gray-700 text-sm ">
                  {resultsArr[1].snippet}
                </p>
              </div>
            </div>
          </a>

          {/* CARD 4 */}
          <a href={resultsArr[2].link} target="_blank" >
            <div className="rounded-lg overflow-hidden bg-blueGray-100 shadow-xl hover:shadow-2xl ease-linear transition-all duration-150">
              <div className="px-6 py-4 min-w-250-px min-h-150-px" >
                <h4 className="text-2xl font-bold leading-normal mt-0 text-blueGray-800">
                  {resultsArr[2].title}
                </h4>
                <h5 className="truncate text-lg">
                  {resultsArr[2].displayed_link}
                </h5>
                <p className="text-gray-700 text-sm ">
                  {resultsArr[2].snippet}
                </p>
              </div>
            </div>
          </a>

          {/* END OF CARD CONTAINER */}
        </div>

        <div className="justify-center align-middle flex">
          <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase px-12 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <a href={searchURL} target="_blank" id="externalGoogleSearch">More...</a>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="justify-center align-middle text-center grid flex-col mt-8">
        <div className="relative flex-col mb-5">
          <h4 className="text-x font-semibold">
            Click the button below to view our recommended articles, as well as other resources!
          </h4>
        </div>

        <div className="relative flex-col">
          <button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase px-12 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onClick={displayRecommendations}>
            View Your Recommendations
          </button>
        </div>

      </div>

      {showMe && <DisplayCards />}

    </>
  );
}
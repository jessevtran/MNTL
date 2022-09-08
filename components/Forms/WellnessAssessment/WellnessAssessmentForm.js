import React, { Component, useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import ReactDOM, { createRoot } from 'react-dom';
import PropTypes from 'prop-types';

import { Form, Formik } from "formik";
import FormikRadioGroup from "../RadioGroup";
import { questionsDB } from "utils/db.js";


//TODO: DEVELOP AND TEST THE FOLLOWING COMPONENTS: Questions,...
/**
 * Wellness Assessment Form Wrapper Componenent
 *
 * Utilizes Formik
 */

//initial values
const initialValues = {
  Emotional0: "",
  Emotional1: "",
  Emotional2: "",
  Emotional3: "",
  Emotional4: "",
  Emotional5: "",
  Emotional6: "",
  Environmental0: "",
  Environmental1: "",
  Environmental2: "",
  Environmental3: "",
  Environmental4: "",
  Environmental5: "",
  Environmental6: "",
  Intellectual0: "",
  Intellectual1: "",
  Intellectual2: "",
  Intellectual3: "",
  Intellectual4: "",
  Intellectual5: "",
  Intellectual6: "",
  Physical0: "",
  Physical1: "",
  Physical2: "",
  Physical3: "",
  Physical4: "",
  Physical5: "",
  Physical6: "",
  Occupational0: "",
  Occupational1: "",
  Occupational2: "",
  Occupational3: "",
  Occupational4: "",
  Occupational5: "",
  Occupational6: "",
  Social0: "",
  Social1: "",
  Social2: "",
  Social3: "",
  Social4: "",
  Social5: "",
  Social6: "",
  Spiritual0: "",
  Spiritual1: "",
  Spiritual2: "",
  Spiritual3: "",
  Spiritual4: "",
  Spiritual5: "",
  Spiritual6: "",
};

// filter out the names from initial values
const questionNames = Object.keys(initialValues);

// FILTER QUESTIONS FROM THE DB
const questionList = [];
questionsDB.sections.map((sections) =>
  sections.questions.map((question) => (
    questionList.push(question)
  )));

// RENDERING THE QUESTION
export class Questions extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    question_type: PropTypes.array.isRequired,
  };

  render() {
    let current_question_types = this.props.question_type;
    let touched = this.props.touched;
    let errors = this.props.errors;
    let values = this.props.values;

    let questionNodes = this.props.data.map(
      function (question, index) {
        return (
          < FormikRadioGroup
            touched={touched}
            errors={errors}
            name={current_question_types[index]}
            question={question}
            values={values}
          />
        )
      }
    )

    return (
      <div id="question-container" className="questionList relative flex flex-col divide-y divide-solid">
        {questionNodes}
      </div>
    )
  }
}

export class App extends Component {
  static propTypes = {
    perPage: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      data: questionList.slice(0, 7),
      question_type: questionNames.slice(0, 7),
      offset: 0,
    };
  }

  fetchItems() {
    let start = this.state.offset;
    let end = start + this.props.perPage;
    // Match the questions with the corresponding question type
    var data = questionList.slice(start, end);
    var data_type = questionNames.slice(start, end);
    this.setState({ data: data, question_type: data_type });
  }

  handlePageClick = (event) => {
    console.log(event);
    console.log('onPageChange', event);

    let newOffset = event.selected * this.props.perPage;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    this.setState({ offset: newOffset }, () => {
      this.fetchItems();
    })
  }

  render() {
    var currentPage = Math.round(this.state.offset / this.props.perPage); // offset/7

    return (
      <>
        <Formik
          initialValues={initialValues}

          onSubmit={async (initialValues) => {
            await new Promise((r) => setTimeout(r, 500));

            let results = {
              Emotional: 0,
              Environmental: 0,
              Intellectual: 0,
              Physical: 0,
              Occupational: 0,
              Social: 0,
              Spiritual: 0,
            };

            // values of the radio forms
            console.log(initialValues);

            //tally up the scores
            for (var i = 0; i < questionNames.length; i++) {
              let value = initialValues[questionNames[i]];
              if (value == '') { // there is a field that is not touched
                console.log("SUBMISSION ABORTED ON QUESTION: " + i + " " + questionNames[i]);
                this.handlePageClick({ selected: Math.floor(i / 7) });
                // Formik.validateField(questionNames[i]);
                document.getElementById("field-validation").click();
                return false;
              }
              // remove end number on the questionName
              let accessKey = questionNames[i].substring(0, questionNames[i].length - 1);
              results[accessKey] += parseInt(value);
            }

            console.log(results);
            // TODO: pass results to quiz results page component

          }}
        >


          {({ values, errors, touched, validateForm, handleSubmit }) => (
            // cannot use handleSubmit because I have unmounted fields
            <Form onSubmit={handleSubmit}>
              <div className="form">

                <Questions
                  data={this.state.data}
                  question_type={this.state.question_type}
                  values={values}
                  errors={errors}
                  touched={touched}
                />

                <nav aria-label="Page navigation" className="mt-4">
                  <ReactPaginate
                    previousLabel={<i className="fas fa-chevron-left -ml-px"></i>}
                    nextLabel={<i className="fas fa-chevron-right -mr-px"></i>}
                    pageCount={7}
                    pageRangeDisplayed={7}
                    marginPagesDisplayed={0}
                    onPageChange={this.handlePageClick}

                    containerClassName=     "pagination flex pl-0 rounded list-none flex-wrap"

                    activeClassName=        "active-item"
                    activeLinkClassName=    "active-link"

                    pageClassName=          "page-item"
                    pageLinkClassName=      "page-link   first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500"

                    previousClassName=      "page-item"
                    previousLinkClassName=  "prev-link   first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"
                    disabledLinkClassName=  "disabled-link"

                    nextClassName=          "page-item"
                    nextLinkClassName=      "next-link   first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blueGray-500 bg-white text-blueGray-500"

                    eslint-disable-next-line no-unused-vars
                    hrefBuilder={(page, pageCount, selected) =>
                      page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                    }
                    hrefAllControls
                    forcePage={currentPage}
                    onClick={(clickEvent) => {
                      console.log('onClick', clickEvent);
                      // Return false to prevent standard page change,
                      // return false; // --> Will do nothing.
                      // return a number to choose the next page,
                      // return 4; --> Will go to page 5 (index 4)
                      // return nothing (undefined) to let standard behavior take place.
                    }}
                  />
                </nav>

                {/* TODO: ERROR CHECKING ON FINAL SUBMISSION, DISPLAY ERROR MSG HERE? */}
                <div className="flex justify-center align-center">
                  <button id="field-validation" type="button" onClick={() => { validateForm().then(() => console.log(errors, touched, values)); }}></button>
                </div>

                {/* ONLY DISPLAY SUBMIT BUTTON ON THE LAST PAGE */}
                {currentPage == 6 &&
                  <div className="flex justify-center align-center">

                    <button
                      type="submit"
                      className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      Submit
                    </button>
                  </div>
                }


              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const WellnessAssessmentForm = () => {
  return (
    <App perPage={7} />
  );
};

export default WellnessAssessmentForm;
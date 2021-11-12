import { Field, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Radio from '../Radio';
import { questionsDB } from "utils/db.js"
import FormikRadioGroup from '../RadioGroup';

//TODO: DEVELOP AND TEST THE FOLLOWING COMPONENTS: Questions,... 
/**
 * Wellness Assessment Form Wrapper Componenent
 * 
 * Utilizes Formik and Yup Validation.
 * @param {*} param0 
 */
const WellnessAssessmentForm = () => {

  



  const initialValues = {
    picked: '',
  };

    //Validation Schemas for questions
    const RADIO_GROUP_VALIDATION_SCHEMA = Yup.string().required('Select an option')

    // Validation Schema for form
    const ValidationSchema = Yup.object().shape({
    radioGroup: RADIO_GROUP_VALIDATION_SCHEMA
  });



return (
    <Formik
    //Initial Values of questions
      initialValues={initialValues}
    //submit Handler for form
      onSubmit={submitHandler}
    //valudationSchema for the form
      validationSchema={ValidationSchema}
    >
      
      <Form>
        <div class="flex flex-col space-y-4 divide-y divide-solid">
      {questionsDB.sections.map(section => (
        section.questions.map(question =>
        <FormikRadioGroup
        question={question}
        rangeOfAnswers={5}
        name={section.type}
        />
        ))
      )}
      </div>

      <SubmissionButton/>
      </Form>
    </Formik>

)
};

//TODO: SUBMIT HANDLER
function submitHandler(){
  async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  }
}


//TODO: ONCHANGE HANDLER
function onChangeHandler(){

}


const SubmissionButton = () => {
  return (
    <button type="submit" className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
    Submit
  </button>
  )
}


export default WellnessAssessmentForm


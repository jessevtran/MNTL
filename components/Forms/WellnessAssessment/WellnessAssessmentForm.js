import { Field, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Radio from '../Radio';
import { questionsDB } from "utils/db.js"
import FormikRadioGroup from '../RadioGroup';

const UpdateResults = () => {
  // Grab values and submitForm from context
  const { values } = useFormikContext();
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    if (values.token.length === 6) {
      submitForm();
    }
  }, [values]);
  return null;
};

//TODO: DEVELOP AND TEST THE FOLLOWING COMPONENTS: Questions,... 
/**
 * Wellness Assessment Form Wrapper Componenent
 * 
 * Utilizes Formik and Yup Validation.
 * @param {*} param0 
 */
const WellnessAssessmentForm = () => {

  



  const initialValues = {
    Emotional: 0,
    Physical: 0,
    Intellectual: 0,
    Environmental: 0,
    Occupational: 0,
    Social: 0,
    Spiritual: 0,
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
      {({values}) => (
      <Form>
        <div class="relative flex flex-col divide-y divide-solid">
      {questionsDB.sections.map(section => (
        section.questions.map(question =>
        <FormikRadioGroup
        props = {values}
        question={question}
        rangeOfAnswers={5}
        name={section.type}
        />
        ))
      )}
      </div>
      <div className="flex justify-center align-center">
        <SubmissionButton/>
      </div>
      
      </Form>
      )}
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
const handleChange = event => {

  
 }


const SubmissionButton = () => {
  return (
    <button type="submit" className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
    Submit
  </button>
  )
}


export default WellnessAssessmentForm


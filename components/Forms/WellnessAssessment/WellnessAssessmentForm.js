import { Field, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import questionsData from "utils/db.js"

//TODO: DEVELOP AND TEST THE FOLLOWING COMPONENTS: Questions,... 
/**
 * Wellness Assessment Form Wrapper Componenent
 * 
 * Utilizes Formik and Yup Validation.
 * @param {*} param0 
 */
const WellnessAssessmentForm = ({}) => {

  

  const questionsData = {
    title: '',
    questionType: '',
    options: [{ value: '-2'}, { value: '-1'}, { value: '0'}, { value: '1'}, { value: '2'}],
  };

  const initialValues = {
    title: '',
    description: '',
    questions: [questionsData],
  };

    //Validation Schemas for questions
    const RADIO_GROUP_VALIDATION_SCHEMA = Yup.string().required('Select an option')

    // Validation Schema for form
    const ValidationSchema = Yup.object().shape({
    radioGroup: RADIO_GROUP_VALIDATION_SCHEMA
  });



return (

    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={ValidationSchema}
    >

    </Formik>

)
};
//FIXME: Lol. I knew what this does. Is it necessary for the handler?
// ? const [values, setValues] = React.useState({}); Is this necessary for the handler?

//TODO: SUBMIT HANDLER
function submitHandler(){
  
}


//TODO: ONCHANGE HANDLER
function onChangeHandler(){

}

// ? pulled from website
//  const handleChange = event => {
//    setValues(prevValues => ({
//      ...prevValues,
//      // we use the name to tell Formik which key of `values` to update
//      [event.target.name]: event.target.value
//    });
//  }

export default WellnessAssessmentForm
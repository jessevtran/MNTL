import { Field, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import React from 'react';

//TODO: DEVELOP AND TEST THE FOLLOWING COMPONENTS: Questions,... 
/**
 * Wellness Assessment Form Wrapper Componenent
 * 
 * Utilizes Formik and Yup Validation.
 * @param {*} param0 
 */
const WellnessAssessmentForm = ({}) => {

    const initialValues = {
        
    }

    //Validation Schemas for questions
    const RADIO_GROUP_VALIDATION_SCHEMA = Yup.string().required('Select an option')

    // Validation Schema for form
    const ValidationSchema = Yup.object().shape({
    radioGroup: RADIO_GROUP_VALIDATION_SCHEMA
  });


return (

    <Formik
    //TODO: Determine schema for initial values
    // initialValues={

    // }
    >

    </Formik>

)
};
//FIXME: I don't know what this does yet, but it can help with event handling in code. @Nnamdi will watch tutorials.
// ? const [values, setValues] = React.useState({}); Is this necessary for the handler?

//TODO: SUBMIT HANDLER
function submitHandler(){
  
}


//TODO: ONCHANGE HANDLER

// ? pulled from website
//  const handleChange = event => {
//    setValues(prevValues => ({
//      ...prevValues,
//      // we use the name to tell Formik which key of `values` to update
//      [event.target.name]: event.target.value
//    });
//  }

export default WellnessAssessmentForm
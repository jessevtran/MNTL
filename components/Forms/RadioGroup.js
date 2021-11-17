import React from "react";
import { Field,} from "formik";


/**
 * The question group for the problem at hand.
 * @param {*} touched list of touched questions
 * @param {*} errors list of questions that have been touched AND unanswered
 * @param {*} name type of question being asked (e.g. "Emotional", "Phsyical"). Used to map to Formik initalValues
 * @param {*} question Question being asked.
 * @returns
 */
export default function FormikRadioGroup({touched, errors, validateRadio, question, name}) {

  /**
   * Validation for the error
   * @param {*} value current question in the form
   * @returns error if the question is not completed
   */
  function validateRadio(value) {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  }

  
  return (
    
    <div class="relative py-4 px-4 flex items-center flex-col md:flex-row  md:justify-between drop-shadow-sm rounded-md">
      <div class="flex flex-col py-2">
        <h6 class="text-xl font-bold text-center lg:text-left leading-normal">{question}</h6>
        {errors[name] && touched[name] && <p className="text-red-400">{errors[name]}</p>}
        </div>
      <div id='role' aria-labelledby="my-radio-group" className="relative flex flex-row px-4 space-x-4 justify-center">
       {/**START of radio group answers */}
        <p>Unlikely</p>   
            <label>
            <Field type="radio" name={name} value={'1'} validate={validateRadio}/>
            </label>
            <label>
              <Field type="radio" name={name} value={'2'} validate={validateRadio}/>
            </label>
            <label>
              <Field type="radio" name={name} value={'3'} validate={validateRadio} />
            </label>
            <label>
              <Field type="radio" name={name} value={'4'} validate={validateRadio} />
            </label>
            <p>Likely</p>
            {/**END of radio group answers */}
      </div>
      
    </div>
    
  );
}

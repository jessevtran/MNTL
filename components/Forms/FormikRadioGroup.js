import React from "react";
import PropTypes from "prop-types";

//TODO: Finish prop distribution for radio group
export default function FormikRadioGroup({
  typeOfAnswers,
  rangeOfAnswers,
  radioGroupOptions,
  question,
}) {
  return (
    //Overall radio group wrapper
    <div class="text-center flex flex-col p-4 md:flex-row md:items-center md:justify-between md:p-12 bg-white rounded-md">
      <div class="text-2xl font-semibold">
        <div class="text-black">{question}</div>
      </div>

      <div className ="flex flex-row">

      </div>
      

    </div>
  );
}

//TODO:Fix the upstreaming for the props.
/**
 *
 * @param {*} param0
 * @returns
 */
function radioGroupOptions({ rangeOfAnswers, typeOfAnswers }) {
  if (typeof typeOfAnswers === "number")
    {
        
        return Array.from(Array(rangeOfAnswers).keys()).map((num) => {
      <label>
        <Field type="radio" name={typeOfAnswers} value={num} />
      </label>;
    });
}
}

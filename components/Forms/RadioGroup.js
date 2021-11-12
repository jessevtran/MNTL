import React from "react";
import Radio from "./Radio";

/**
 *
 * @param {*} rangeOfAnswers # of possible radio choices.
 * @param {*} value type of question being asked (e.g. "Emotional", "Phsyical"). Used to map to Formik initalValues
 * @param {*} question Question being asked.
 * @returns
 */
export default function FormikRadioGroup({props,rangeOfAnswers, question, name}) {
  const {values} = props
  return (
    <div class="relative py-4 px-4 flex items-center flex-col lg:flex-row  md:justify-between drop-shadow-sm rounded-md">
        <h6 class="text-xl font-bold text-center lg:text-left leading-normal">{question}</h6>
      {/* START of LIST of RADIO OPTIONS*/}
      <div className="relative flex flex-row px-4 space-x-4 justify-center">
        {[...Array(rangeOfAnswers).keys()].map((num) => (
          <Radio props={values} name={name} value={`${num++}`} />
        ))}
      </div>
      {/* END of LIST of RADIO OPTIONS*/}
    </div>
  );
}

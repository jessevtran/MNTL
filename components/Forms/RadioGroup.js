import React from "react";
import Radio from "./Radio";

/**
 *
 * @param {*} rangeOfAnswers # of possible radio choices.
 * @param {*} value type of question being asked (e.g. "Emotional", "Phsyical"). Used to map to Formik initalValues
 * @param {*} question Question being asked.
 * @returns
 */
export default function FormikRadioGroup({rangeOfAnswers, question, name}) {
  return (
    <div class="md:flex-col md:justify-center md:justify-between md:p-2 drop-shadow-sm rounded-md">
        <h6 class="text-xl font-bold text-center leading-normal mt-0 mb-2">{question}</h6>
      {/* START of LIST of RADIO OPTIONS*/}
      <div className="flex flex-row px-4 space-x-4 justify-center">
        {[...Array(rangeOfAnswers).keys()].map((num) => (
          <Radio name={name} value={(num++).toString} />
        ))}
      </div>
      {/* END of LIST of RADIO OPTIONS*/}
    </div>
  );
}

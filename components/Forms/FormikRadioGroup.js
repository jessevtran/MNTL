import React from "react";

//TODO: Finish prop distribution for radio group
export default function FormikRadioGroup({
  rangeOfAnswers,
  value,
  question,
}) {
  return (
    //Overall radio group wrapper
    <div class="text-center flex flex-col p-4 md:flex-row md:items-center md:justify-between md:p-12 bg-white rounded-md">
      <div class="text-2xl font-semibold">
        <div class="text-black">{question}</div>
      </div>
      <div className ="flex flex-row px-4 space-x-4">
          {radioGroupOptions(rangeOfAnswers, value)}
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
function radioGroupOptions({rangeOfAnswers, value }) {
    {
        return Array.from(Array(rangeOfAnswers).keys()).map((num) => {
      <label>
        <Field type="radio" name={value} value={num} />
      </label>;
    });
}
}

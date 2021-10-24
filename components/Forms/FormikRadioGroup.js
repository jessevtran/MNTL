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
        <div role="group">
            <h1>
                {question}
            </h1>
            <div>
                {...radioGroupOptions}
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
function radioGroupOptions({ rangeOfAnswers, thing }) {

    if (typeof typeOfAnswers === "number")
        return (
            Array.from(Array(rangeOfAnswers).keys()).map(num => {
                <label>
                    <Field type="radio" name={thing} value={num} />
                </label>;
            }
            )
        );
}
import { Form, Formik} from "formik";
import { React } from "react";
import { questionsDB } from "utils/db.js";
import FormikRadioGroup from "../RadioGroup";

//TODO: DEVELOP AND TEST THE FOLLOWING COMPONENTS: Questions,...
/**
 * Wellness Assessment Form Wrapper Componenent
 *
 * Utilizes Formik
 * @param {*} 
 */
const WellnessAssessmentForm = () => {
  
  //initial values
  const initialValues = {
    Emotional0: "",
    Emotional1: "",
    Emotional2: "",
    Emotional3: "",
    Emotional4: "",
    Emotional5: "",
    Emotional6: "",
    Environmental0: "",
    Environmental1: "",
    Environmental2: "",
    Environmental3: "",
    Environmental4: "",
    Environmental5: "",
    Environmental6: "",
    Intellectual0: "",
    Intellectual1: "",
    Intellectual2: "",
    Intellectual3: "",
    Intellectual4: "",
    Intellectual5: "",
    Intellectual6: "",
    Physical0: "",
    Physical1: "",
    Physical2: "",
    Physical3: "",
    Physical4: "",
    Physical5: "",
    Physical6: "",
    Occupational0: "",
    Occupational1: "",
    Occupational2: "",
    Occupational3: "",
    Occupational4: "",
    Occupational5: "",
    Occupational6: "",
    Social0: "",
    Social1: "",
    Social2: "",
    Social3: "",
    Social4: "",
    Social5: "",
    Social6: "",
    Spiritual0: "",
    Spiritual1: "",
    Spiritual2: "",
    Spiritual3: "",
    Spiritual4: "",
    Spiritual5: "",
    Spiritual6: "",
  };

  return (
    <Formik

      /**
       * loads initial values from above
       */
      initialValues={initialValues}

      /**
       * Tallies up the scores
       */
      onSubmit={async (initialValues) => {
        await new Promise((r) => setTimeout(r, 500));

        //Get the first Key, loop through rest until new 0 found. Repeat until done.
        let results = {
          Emotional: 0,
          Environmental: 0,
          Intellectual: 0,
          Physical: 0,
          Occupational: 0,
          Social: 0,
          Spiritual: 0,
        };
        
        console.log(initialValues);
       
        var keys = Object.keys(initialValues)
        console.log(keys)
       
        //tally up the scores
        for (var i = 0; i < keys.length; i++) {
          let value = initialValues[keys[i]]  
          let accessKey = keys[i].replace(/\d+/g, '')
          results[accessKey] += parseInt(value)
        }

        //FIXME: Temporary answer
        alert(JSON.stringify(results))

    
        
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div class="relative flex flex-col divide-y divide-solid">
            {questionsDB.sections.map((section) =>
              section.questions.map((question, index) => (
                <FormikRadioGroup
                  touched={touched}
                  errors={errors}
                  values={values}
                  question={question}
                  name={section.type + `${index++}`}
                />
              ))
            )}
          </div>
          <div className="flex justify-center align-center">
            <button
              type="submit"
              className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default WellnessAssessmentForm;

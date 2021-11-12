import React from 'react';
import {Field, validateYupSchema} from 'formik';


const Radio = ({name, value, title, props}) => {

    return (
            <label>
              <Field type="radio" name={name} value={value} onChange={e => {props.name = parseInt(props.name) + parseInt(e.target.value) ; console.log(props.name) }} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
              {title ? title : value}
            </label>
    )
}


export default Radio




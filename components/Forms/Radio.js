import React from 'react';
import {Field} from 'formik';


const Radio = ({name, value, title}) => {

    return (
            <label>
              <Field type="radio" name={name} value={value} className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
              {title ? title : value}
            </label>
    )
}


export default Radio




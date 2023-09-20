import React from "react";
import {createField, FieldType} from "@altiore/form";




const Field = ({label, inputProps, fieldProps, defaultValue, error, type, ...rest}) => {
	//console.log("rest", rest)
	return (
	  <div>
		<input {...inputProps} /><br/>
	  </div>
	);
  }
  
export default{
	Text: createField(FieldType.TEXT, Field),
	Email: createField(FieldType.EMAIL, Field),
	Pass: createField(FieldType.PASSWORD, Field),
	Number: createField(FieldType.NUMBER, Field)
}

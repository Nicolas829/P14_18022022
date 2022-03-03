import DatePicker from 'react-date-picker';
import { useState } from 'react';

export default function InputDatePickerEmployees(props) {
    const [value, setValue] = useState(new Date());
    const item = props.item
    const title= props.label
    return (<div className="box-input-label">
        <DatePicker className="inputdate"
            onChange={(date: Date) => { setValue(date); console.log(title); sessionStorage.setItem(title, value) }} value={value} key={item}
            onClose={()=>console.log("prout")}
        
        />
        <label className={item}>{item}</label>
           
          </div>)

}
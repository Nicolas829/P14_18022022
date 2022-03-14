import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { format } from 'date-fns/esm'
import store from '../redux/store/store';
import container from 'react-modal-nico-p14/dist/component/container';




export default function InputDatePickerEmployees(props) {
  const [startDate, setStartDate] = useState(new Date());

  const item = props.item
  const title = props.label
  const dispatch = props.dispatch
  return (<div className="box-input-label">
    <label className={item}>{item}</label>
    <div className="container-datepicker">
      <DatePicker
        className='main-container-datepicker'
        selected={startDate}
        onChange={(date) => { setStartDate(date); let newDate = format(date, "dd-MM-yyyy"); store.dispatch(dispatch(newDate)) }}
        shpeekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        withPortal
        portalId="root-portal"
        isClearable
      />
    </div>

  </div>)

}
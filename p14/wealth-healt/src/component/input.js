import React from 'react';
import store from '../redux/store/store';

/**
 * It creates a label and input field for each item in the state.
 * @param props - the props passed to the component
 * @returns A div with a label and input.
 */
export default function InputEmployees(props) {
  const item = props.item
  const label = props.label
  const dispatch = props.dispatch
  return (<div className="box-input-label">
    <label className={item}>{item}</label>
    <input type="text" id={item}
      onChange={(e) => store.dispatch(dispatch(e.target.value))} />

  </div>)

}
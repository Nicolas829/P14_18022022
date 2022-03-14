import store from "../redux/store/store"

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
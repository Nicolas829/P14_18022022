import { FirstName } from "../redux/reducer/reducer"
import store from "../redux/store/store"

export default function InputEmployees(props) {
  const item = props.item
  const label = props.label
  const dispatch=props.dispatch
    return (<div className="box-input-label">
            <input type="text" id={item} onChange={(e) =>store.dispatch(dispatch( e.target.value))} />
            <label className={item}>{item}</label>
           
          </div>)

}
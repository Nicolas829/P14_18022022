export default function InputEmployees(props) {
    const item = props.item
    const label= props.label
    return (<div className="box-input-label">
            <input type="text" id={item} onChange={(e) =>sessionStorage.setItem(label, e.target.value)} />
            <label className={item}>{item}</label>
           
          </div>)

}
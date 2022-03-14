import { saveEmployees } from "../action/action"

export default function Button(props) {
    const openModal = () => props.openModal()
    const function1 = () => { if (props.function1) { props.function1() } }
    const function2 = () => {
        if (props.function2) { props.function2() }
    }
    return (<div className={`container-${props.className}`}><button className="btn save" onClick={((e) => {
        if (function1 !== "") { function1() } function2(props.data)


    })}    >{props.title}</button></div>)
}




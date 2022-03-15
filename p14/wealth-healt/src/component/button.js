import React from 'react';
import { saveEmployees } from "../action/action"
import store from '../redux/store/store';

/**
 * It creates a button that can be used to save data.
 * @param props - The props object is the way we pass data to our component.
 * @returns A button with a title and a function.
 */
export default function Button(props) {
    const openModal = () => props.openModal()
    const function1 = () => { if (props.function1) { props.function1() } }
    const function2 = () => {
        if (props.function2) { props.function2() }
    }
    return (
        <div className={`container-${props.className}`}>
            <button className="btn save" onClick={((e) => {
                if (function1 !== "") { function1() } function2(props.data)


            })}    >
                {props.title}
            </button>
        </div>)
}




import { saveEmployees } from "../action/action"

export default function Button(props) {
    const openModal = () => props.openModal()    
   
    return (<button className="btn" onClick={((e) => {
        saveEmployees(props.data)    
         openModal()     
      
           
    })}    >Save</button>)
}


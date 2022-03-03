import { saveEmployees } from "../action/action"

export default function Button(props) {
    const openModal = () => props.openModal()    
   
    return (<button className="btn" onClick={((e) => {
        saveEmployees()    
         openModal()     
      
           
    })}    >Save</button>)
}


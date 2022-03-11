import { saveEmployees } from "../action/action"

export default function Button(props) {
    const openModal = () => props.openModal()    
   
    return (<div className="container-btn-save"><button className="btn save" onClick={((e) => {
        saveEmployees(props.data)    
         openModal()     
      
           
    })}    >Save</button></div>)
}


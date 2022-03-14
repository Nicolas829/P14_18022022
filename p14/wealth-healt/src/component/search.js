import store from "../redux/store/store";
import { useState } from "react";
import { EmployeesDataSearch } from "../redux/reducer/reducer";

export default function Search() {


    return <input type="text" placeholder="Search" onChange={(e) => {


        let search = e.target.value;






    }}></input>
}
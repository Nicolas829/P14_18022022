import React from 'react';
import { EmployeesData, EmployeesDataTransit } from "../redux/reducer/reducer";
import store from "../redux/store/store";
import { ResetState } from "../redux/reducer/reducer";

/**
 * This function will save the data from the form to the store
 */
export function saveEmployees() {


    const data = {
        firstName: store.getState().firstName,
        lastName: store.getState().lastName,
        dateOfBirth: store.getState().dateOfBirth,
        startDate: store.getState().startDate,
        street: store.getState().street,
        city: store.getState().city,
        state: store.getState().state,
        zipCode: store.getState().zipCode,
        department: store.getState().department,

    }

    store.dispatch(EmployeesData(data))
    store.dispatch(ResetState())


}
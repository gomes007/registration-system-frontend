import axios from "axios";
import {BASE_API_URL} from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + '/api/employee'


const saveEmployee = async (employee) => {
    const baseHeaders = authHeader();
    return axios.post(API_URL, employee, {headers: baseHeaders});
}


const deleteEmployee = (employee) => {
    return axios.delete(API_URL + '/' + employee.id);
}

const getAllEmployee = () => {
    return axios.get(API_URL);
}


export {saveEmployee, deleteEmployee, getAllEmployee};


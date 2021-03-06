import axios from "axios";
import {BASE_API_URL} from "../common/constants";

const API_URL = BASE_API_URL + '/api/employee'


const saveEmployee = (employee) => {
    return axios.post(API_URL, employee);
}


const deleteEmployee = (employee) => {
    return axios.delete(API_URL + '/' + employee.id);
}

const getAllEmployee = () => {
    return axios.get(API_URL);
}

export {saveEmployee, deleteEmployee, getAllEmployee};


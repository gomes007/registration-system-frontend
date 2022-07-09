import axios from "axios";
import {BASE_API_URL} from "../common/constants";

const API_URL = BASE_API_URL + '/api/sale';

const saveSale = (sale) => {
    return axios.post(API_URL, sale);
}


const deleteSale = (sale) => {
    return axios.delete(API_URL + '/' + sale.id);
}

const getAllSale = () => {
    return axios.get(API_URL);
}

export {saveSale, deleteSale, getAllSale};
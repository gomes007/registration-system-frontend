import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + '/api/files'

const getDownloadURL = (fileName) => {
    if (fileName?.startsWith('blob')) {
        return fileName;
    }
    return `${API_URL}/${fileName}`;
}

const uploadFile = (file) => {
    const baseHeaders = authHeader();
    baseHeaders['Content-Type'] = 'multipart/form-data';

    console.log('uploading file', file);

    return axios
        .post(`${API_URL}/upload`, { file }, {
            headers: baseHeaders
        })
        .then(response => {
            console.log(response);
            return response.data
        })
        .catch(error => {
            console.log(error);
            return 'default.jpeg';
        })
}

export { getDownloadURL, uploadFile };

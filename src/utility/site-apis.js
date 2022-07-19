import { toast } from 'react-toastify';
import Config from "../common/Config";
import axios from 'axios';


const axiosAPI = axios.create({
  baseURL: Config.apiURL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Authorization': Config.token }
});

export function apiPostCall(path, params) {
  return axiosAPI.post(path, params)
    .then((response) => {
      return response?.data?.message
    })
    .catch((error) => {
      let errors = null
      if (error.response) {
        errors = error.response
      } else if (error.request) {
        errors = error.request
      } else {
        errors = error.message
      }
      toast.error(errors.statusText);
    });
}

export function fileUpload(file) {
  let formData = new FormData();
  formData.append('file', file);
  formData.append('is_private', '0');
  formData.append('folder', 'Home/Attachments');
  formData.append('doctype', 'Web Page');
  return axiosAPI.post('/api/method/upload_file', formData)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      let errors = null
      if (error.response) {
        errors = error.response
      } else if (error.request) {
        errors = error.request
      } else {
        errors = error.message
      }
      toast.error(errors.statusText);
    });


}
import axios from 'axios';
var apiUrl = 'http://api.additivasia.io/api/v1/assignment/employees/';
export const DataApi = (data = null) => {
try {
return axios.get(apiUrl+data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
} catch (err) {
   return {statusCode:400, message:"Error! Please try again"}
}
    
}
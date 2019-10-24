import {AxiosInstance as axios} from "axios";

const url = 'localhost:5001/api';

class api {
    static getFamilyList(){
        return axios.get(url + '/families')
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (error) {
                //handle error
                console.log(error);
            })
            .finally(function () {
                //always executed
            })
    }
}

export default api;
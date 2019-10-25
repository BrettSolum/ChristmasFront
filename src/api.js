import axios from "axios";

const url = 'https://localhost:5001/api';

class api {
    static getFamilyList(){
        return axios.get(url + '/Families')
            .then(function (response) {
                //handle success
                console.log(response);
                return response;
            })
            .catch(function (error) {
                //handle error
                console.log(error);
            })
            .finally(function () {
                //always executed
                console.log("attempted call to " + url + "/Families");
            })
    }
}

export default api;
import axios from "axios";

const url = `https://${window.location.hostname}:5001/api`;

class api {
    static getFamilyList(){
        debugger;
        return axios.get(url + '/Families')
            .then(function (response) {
                //handle success
                return response.data;
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

    static getFamilyUsers(family){
        return axios.get(url + '/Families/' + family + '/Users')
            .then(function (response) {
                return response.data;
            })
            .catch(function(error) {
                console.log(error);
            })
            .finally(function() {
                console.log("attempted call to " + url + "/Families/" + family + "/Users")
            })
    }

    static getUser(user){
        return axios.get(url + '/Users' + user)
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.log(error);
            })
            .finally(function() {
                console.log('attempted call to ' + url + '/Users/' + user)
            })
    }
}

export default api;
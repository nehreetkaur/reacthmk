import axios from "axios";
const BASEURL="https://randomuser.me/api/?results=25";

// call for api and setting to default in case// activity 19

export default{
    ApiSearch: function(){
        return axios.get(BASEURL);
    }
}
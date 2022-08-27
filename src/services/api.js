import axios from "axios";

var key = '1fa6456d5b6744a997f160359222608';

const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + 'London' + '=no'

    // http://api.weatherapi.com/v1/current.json?key=1fa6456d5b6744a997f160359222608&q=London&aqi=no
});


export default api;
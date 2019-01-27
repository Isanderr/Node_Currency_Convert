import Axios from "axios";

// http://data.fixer.io/api/latest?access_key=3a1f975c3697a8f866c2551c8502bf2c


const getExchangeRate = (from, to) =>
{
    Axios.get('http://data.fixer.io/api/latest?access_key=3a1f975c3697a8f866c2551c8502bf2c').then((response) =>
    {

    });
};
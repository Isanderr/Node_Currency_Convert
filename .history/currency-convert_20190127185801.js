

// http://data.fixer.io/api/latest?access_key=3a1f975c3697a8f866c2551c8502bf2c

const axios = require('axios');


const getExchangeRate = async (from, to) =>
{
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=3a1f975c3697a8f866c2551c8502bf2c')
    const euro = 1 / response.data.rates[ from ];
    const rate = euro * response.data.rates[ to ];
    return rate;
};

const getCountries = (currencyCode) =>
{
    return axios.get(`https://restcountries.eu/rest/v2/currency/${ currencyCode }`).then((response) =>
    {
        return response.data.map((country) => country.name);
    });
};

getExchangeRate('PLN', 'USD').then((rate) =>
{
    console.log(rate);
});

getCountries('EUR').then((countries) =>
{
    console.log(countries)
});
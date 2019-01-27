

// http://data.fixer.io/api/latest?access_key=3a1f975c3697a8f866c2551c8502bf2c

const axios = require('axios');


const getExchangeRate = async (from, to) =>
{
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=3a1f975c3697a8f866c2551c8502bf2c')
    const euro = 1 / response.data.rates[ from ];
    const rate = euro * response.data.rates[ to ];
    return rate;
};

const getCountries = async (currencyCode) =>
{
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${ currencyCode }`)
    return response.data.map((country) => country.name);
};

// const convertCurrency = (from, to, amount) =>
// {
//     let convertedAmount;
//     return getExchangeRate(from, to).then((rate) =>
//     {
//         convertedAmount = (amount * rate).toFixed(2);
//         return getCountries(to);
//     }).then((countries) =>
//     {
//         return `${ amount } ${ from } is worth ${ convertedAmount } ${ to }. You can spend it in the follwing countries: ${ countries.join(', ') }`;
//     });
// };

convertCurrency('USD', 'CAD', 20).then((message) =>
{
    console.log(message);
});

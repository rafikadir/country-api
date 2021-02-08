fetch('https://restcountries.eu/rest/v2/all')
    .then (res => res.json())
    .then (data => displayCountry(data))

const displayCountry = countries => {
    
    const row = document.getElementById('countryDiv');

    countries.forEach(country => {
        const col = document.createElement('div');
        col.className = "col-lg-3 country";
        const countryInfo = `
            <img src="${country.flag}">
            <h4>${country.name}</h4>
            <ul>
                <li>Capital: ${country.capital}</li>
                <li>Area: ${country.area}</li>
                <li>Population: ${country.population}</li>
                <li>Region: ${country.region}</li>
                <li>Alpha2Code: ${country.alpha2Code}</li>
            </ul>
        `;
        col.innerHTML = countryInfo;
        row.appendChild(col);
        console.log(country);
    });
}

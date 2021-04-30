class countriesData {
    getData(apiLink) {
        return $.get(`https://restcountries.eu/rest/v2/${apiLink}`, function (data, status) {
            return data
        })
    }
    showAll(data) {
        data.forEach(country => {
            $('.countries').append(` <div class="country">
        <img src="${country.flag}" alt="${country.name}">
       
        <h3>${country.name}</h3>
        <p>Population: <span class="population">${country.population}</span> </p>
        <p>Region: <span class="region">${country.region}</span></p>
        <p>Capital: <span class="capital">${country.capital}</span></p>
    </div>`)
        });
    }
    showSearch(inData) {
        let checkCountry = $(".countries .country");
        checkCountry.hide();
        for (let i = 0; i < checkCountry.length; i++) {
            if (checkCountry[i].children[1].innerText.toLowerCase().includes(inData.currentTarget.value)) {
                checkCountry[i].style.display = "block"
            }
        }
        if (inData.currentTarget.value === "" || inData.currentTarget.value === " ") {
            checkCountry.show();
        }
    }
    showCountry(data) {
        $('.country-data').append(`<div class="pic"><img src="${data.flag}" alt="${data.name}"></div>
        <div class="detail">
        <div class="detail1">
       <h3>${data.name}</h3>
        <p>Population: <span class="population">${data.population}</span> </p>
        <p>Region: <span class="region">${data.region}</span></p>
        <p>Capital: <span class="capital">${data.capital}</span></p>
        </div>
        <div class="detail2">
        <p>Top Level Domain: <span class="topLevelDomain">${data.topLevelDomain}</span></p>
        <p>currencies: <span class="currencies">${data.currencies[0].name}</span></p>
        <p>Languages: <span class="languages"></span></p>
        </div>
<div class="borders">
<p>Border Countries: </p>
</div>
</div>
        `)
        data.languages.forEach(lang => {
            $('.languages').append(lang.name + ", ")
        })
        data.borders.forEach(border => {
            $(".borders p").append(`<span>${border}</span> `)
        })
    }
}
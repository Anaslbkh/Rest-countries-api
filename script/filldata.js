$(document).ready(async function () {
    /* let countries;
     //get the data from the api
     $.get("https://restcountries.eu/rest/v2/all", function (data, status) {
         countries = data;
         data.forEach(country => {
             $('.countries').append(` <div class="country">
         <img src="${country.flag}" alt="${country.name}">
        
         <h3>${country.name}</h3>
         <p>Population: <span class="population">${country.population}</span> </p>
         <p>Region: <span class="region">${country.region}</span></p>
         <p>Capital: <span class="capital">${country.capital}</span></p>
     </div>`)
         });
     });
 */
    let dd = new countriesData;
    dd.showAll(await dd.getData("all"))

    $('input').keyup((e) => {
        dd.showSearch(e)
    });

    $('select').change(async (e) => {
        $('.countries').html("");
        if ($('select').val() != 'all') {
            dd.showAll(await dd.getData(`region/${$('select').val()}`))
        }
        else {
            dd.showAll(await dd.getData("all"))
        }
    }
    )

    $(".country").click(async (e) => {
        window.location.href = `../country.html?${e.currentTarget.children[1].innerHTML}`;
    })

})
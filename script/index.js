$(document).ready(function () {
    let scssVars;
    $.getJSON('./script/variables.json', (vars) => {
        return scssVars = vars
    })
    $('.toggle-light, .toggle-Dark').click(() => {
        $('.toggle-light, .toggle-Dark').toggle();
        console.log($('.toggle-light')[0].style.display);

        if ($('.toggle-light')[0].style.display === "none") {
            $('body').css({ "background-color": `${scssVars.DarkModeBackground}`, "color": `${scssVars.White}` })
            $('header nav').css({ "background-color": scssVars.DarkModeElements })
            $('input').css({ "background-color": scssVars.DarkModeElements, "color": scssVars.White })
            $('select').css({ "background-color": scssVars.DarkModeElements, "color": scssVars.White })
            $('.country').css({ "background-color": scssVars.DarkModeElements })
            $('.borders p span').css({ "background-color": scssVars.DarkModeElements })
            $('button').css({ "background-color": scssVars.DarkModeElements })
            $('button').css({ "color": scssVars.White })

        } else {
            $('body').css({ "background-color": `${scssVars.LightModeBackground}`, "color": `${scssVars.LightModeText}` })
            $('header nav').css({ "background-color": scssVars.White })
            $('input').css({ "background-color": scssVars.White, "color": scssVars.LightModeInput })
            $('select').css({ "background-color": scssVars.White, "color": scssVars.LightModeInput })
            $('.country').css({ "background-color": scssVars.White })
            $('.borders p span').css({ "background-color": scssVars.White })
            $('button').css({ "background-color": scssVars.White })
            $('button').css({ "color": scssVars.DarkModeBackground })

        }

    })


});
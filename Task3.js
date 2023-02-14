let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("Kelvin");

function celTofe() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = parseFloat(output.toFixed(4));

    let kel = (parseFloat(celsius.value) + 273.15);
    document.getElementById("Kelvin").value = parseFloat(kel.toFixed(4));
}
function feTocel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    document.getElementById("celsius").value = parseFloat(output.toFixed(4));

    let kel = (parseFloat(celsius.value) + 273.15);
    document.getElementById("Kelvin").value = parseFloat(kel.toFixed(4));
    // console.log(output);
}
function kelTocf() {
    let cel = (parseFloat(kelvin.value) - 273.15);
    document.getElementById("celsius").value = parseFloat(cel.toFixed(4));
    
    let feh = ((parseFloat(kelvin.value) - 273.15) * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = parseFloat(feh.toFixed(4));
}

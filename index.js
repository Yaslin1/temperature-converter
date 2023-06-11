const form = document.querySelector("form");
form.addEventListener("submit",convertFahrenheitToCelsius)


function convertFahrenheitToCelsius(event) {
    event.preventDefault()
    const fahrenheit = (event.target.fahrenheit.value)
    const celsius = (fahrenheit-32) * (5/9)
    document.querySelector("h2").innerText = fahrenheit + " is fahrenheit " + celsius.toLocaleString(2) + "is celsius."
}
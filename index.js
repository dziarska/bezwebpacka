
// import style from "./index.scss"

const checkbox = document.getElementById('mode-checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=" + arrivalCity.value +"&appid=16757cdb1c5e963cb82b1f47805831e7")
.then((resp) => resp.json()) // Transform the data into json
.then(function (data) {
console.log(data.main.temp - 273)
let temperature = (data.main.temp-273).toFixed()
document.getElementById("temperature").innerHTML += `<div id="temperature"> ${temperature}</div>`

});


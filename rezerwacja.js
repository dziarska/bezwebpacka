const checkbox = document.getElementById('mode-checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
});

let buttonValue = document.querySelector('button value')
const seatWrapper = document.querySelector('.seatWrapper');
const seat = document.querySelectorAll('.seat');
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat')){
        e.target.classList.toggle('selected');
    }
}
);

document.getElementsByClassName(".departureDate").innerHTML = localStorage.getItem("data wylotu");

let departureDate = localStorage.getItem('data wylotu')

console.log(departureDate)

document.querySelector(".departureDate").innerHTML = departureDate;


document.getElementsByClassName(".arrivalDate").innerHTML = localStorage.getItem("data powrotu");

let arrivalDate = localStorage.getItem('data powrotu')

console.log(arrivalDate)

document.querySelector(".arrivalDate").innerHTML = arrivalDate;


document.getElementsByClassName('.departureCity1').innerHTML = localStorage.getItem("depcity");

let departureCityvalue = localStorage.getItem('depcity')

document.querySelector(".departureCity").innerHTML = departureCityvalue;
document.querySelector(".cityDeparture").innerHTML = departureCityvalue;


document.getElementsByClassName('.arrivalCity1').innerHTML = localStorage.getItem("arrcity");

let arrivalCityvalue = localStorage.getItem('arrcity')

document.querySelector(".arrivalCity").innerHTML = arrivalCityvalue;
document.querySelector(".cityArrival").innerHTML = arrivalCityvalue;


fetch("https://api.openweathermap.org/data/2.5/weather?q=" + departureCityvalue +"&appid=16757cdb1c5e963cb82b1f47805831e7")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
  let temperature = (data.main.temp-273).toFixed()
  let weatherDepartureicon = (data.weather[0].icon)
  document.getElementById("temperatureDeparture").innerHTML += `<div id="temperatureDeparture"> ${temperature} °C</div>`
let iconDeparture = "http://openweathermap.org/img/w/" + weatherDepartureicon + ".png";
  document.querySelector('.iconDeparture').src = "http://openweathermap.org/img/w/" + weatherDepartureicon + ".png"

  })

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + arrivalCityvalue +"&appid=16757cdb1c5e963cb82b1f47805831e7")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
  let temperature = (data.main.temp-273).toFixed()
  let weatherId = (data.weather[0].icon)
  document.getElementById("temperatureArrival").innerHTML += `<div id="temperatureArrival"> ${temperature} °C</div>`;
  let iconArrival = "http://openweathermap.org/img/w/" + weatherId + ".png";
  document.querySelector('.iconArrival').src = "http://openweathermap.org/img/w/" + weatherId + ".png"
})


const selectSeat = document.querySelector('.seat')
selectSeat.addEventListener('click', (event) => {
    // const selectSeat = document.querySelector('.seat');
    localStorage.setItem('seatList', event.target.value);
    alert('dodano miejsce ' + event.target.value)
  });
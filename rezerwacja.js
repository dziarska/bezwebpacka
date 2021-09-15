const checkbox = document.getElementById('mode-checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
});





let buttonValue = document.querySelector('button value')
const seatWrapper = document.querySelector('.seatWrapper');
const seat = document.querySelectorAll('.seat');
// const selectedSeat = document.querySelectorAll('.seat selected')
function updateSeatCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    // console.log(selectedSeats)

    const selectedSeatsCount = selectedSeats.length
    // console.log(selectedSeatsCount)
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * 200
    currencyValue = total.innerText;
    
    if (currencyValue > 0){
        localStorage.setItem('priceValue', currencyValue)
    }
   
    
}

seatWrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat')){
        e.target.classList.toggle('selected');
    }
    updateSeatCount()
   

    localStorage.setItem('seatList', event.target.value);
 alert('dodano miejsce ' + event.target.value)
//  getData()
//  console.log(event.target.value)
});


document.getElementsByClassName(".departureDate").innerHTML = localStorage.getItem("data wylotu");

let departureDate = localStorage.getItem('data wylotu')

// console.log(departureDate)

document.querySelector(".departureDate").innerHTML = departureDate;


document.getElementsByClassName(".arrivalDate").innerHTML = localStorage.getItem("data powrotu");

let arrivalDate = localStorage.getItem('data powrotu')

// console.log(arrivalDate)

document.querySelector(".arrivalDate").innerHTML = arrivalDate;


document.getElementsByClassName('.departureCity1').innerHTML = localStorage.getItem("depcity");

let departureCityvalue = localStorage.getItem('depcity')

document.querySelector(".departureCity").innerHTML = departureCityvalue;
document.querySelector(".cityDeparture").innerHTML = departureCityvalue;


document.getElementsByClassName('.arrivalCity1').innerHTML = localStorage.getItem("arrcity");

let arrivalCityvalue = localStorage.getItem('arrcity')

document.querySelector(".arrivalCity").innerHTML = arrivalCityvalue;
document.querySelector(".cityArrival").innerHTML = arrivalCityvalue;


//////////////////POGODA

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


///PRZELICZNIK
// document.querySelector(".selectCurrency").addEventListener("change", getData);

// function getData() {
// fetch("http://api.nbp.pl/api/exchangerates/rates/C/USD/?format=json")
// .then((resp) => resp.json()) // Transform the data into json
// .then(function (data) {
// data.forEach(function(element) {
// console.log(element.bid);
// document.getElementById(
// "total"
// ).innerHTML += `<div> ${element.bid} </div>`;
// });
// });
// }
// function getData(){
// let value = document.getElementById("total.innerText")
// parseFloat(value)
// // let summa = value * data.rates[0].ask
// fetch("http://api.nbp.pl/api/exchangerates/rates/C/USD/?format=json")
// .then((resp) => resp.json()) // Transform the data into json
// .then(function (data, input){
//     // let suma = data.rates[0].ask * input
//     document.getElementById("total").innerHTML += `<span id="total"> ${data.rates[0].ask*value}</span>`
// console.log(data.rates[0].ask*value)
// })
// }



// document.getElementById("currency").addEventListener("change", calc)
// function calc(){
//     let inputValue = document.getElementById("total").value
//     parseFloat(inputValue)
//     // fetch("http://api.nbp.pl/api/exchangerates/rates/C/USD/?format=json")
//     // .then((resp) => resp.json()) // Transform the data into json
//     // .then(function (data, input)
//     console.log(inputValue)
//     if (inputValue <= 0) {
//         document.getElementById("total").innerHTML += `<span id="total"> wprowadzono złą liczbę</span>`
//     }
//     else{
//         console.log(this.value)
//         fetch(`http://api.nbp.pl/api/exchangerates/rates/C/${this.value}/?format=json`)
//         .then((resp) => resp.json()) // Transform the data into json
//         .then(function (data){
//         console.log(data.rates[0].ask *inputValue)
//         document.getElementById("total").innerHTML += `<span id="total"> ${data.rates[0].ask *inputValue}</spam>`
//         })
//     }
//     console.log(typeof (inputValue))
// }

document.querySelector(".selectCurrency").addEventListener("change",showData);

function showData (e){
    e.preventDefault();
    let kasa = localStorage.getItem('priceValue');
    let currencyCode = document.querySelector('.selectCurrency.value')
    // let currencyCode = document.querySelector(".selectCurrency.value")
    // console.log(currencyCode)
    fetch("http://api.nbp.pl/api/exchangerates/rates/C/`${form.value}`/?format=json")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
        console.log(data.rates[0].ask);
        document.getElementById("cokolwiek").innerHTML = kasa * data.rates[0].ask;
        });
    }
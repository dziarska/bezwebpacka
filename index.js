
// import style from "./index.scss"

const checkbox = document.getElementById('mode-checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
})

//fetch("https://api.openweathermap.org/data/2.5/weather?q=" + arrivalCity.value +"&appid=16757cdb1c5e963cb82b1f47805831e7")
//.then((resp) => resp.json()) // Transform the data into json
//.then(function (data) {
//console.log(data.main.temp - 273)
//let temperature = (data.main.temp-273).toFixed()
//document.getElementById("temperature").innerHTML += `<div id="temperature"> ${temperature}</div>`

//});

const selectArrivalcity = document.querySelector('.arrivalCity1');

selectArrivalcity.addEventListener('change', (event) => {
  const result = document.querySelector('.arrcity');
  localStorage.setItem('arrcity', `${event.target.value}`);
  
//   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + arrivalCity.value +"&appid=16757cdb1c5e963cb82b1f47805831e7")
//   .then((resp) => resp.json()) // Transform the data into json
//   .then(function (data) {
//   console.log(data.main.temp - 273)
//   let temperature = (data.main.temp-273).toFixed()
//   document.getElementById("temperatureArrival").innerHTML += `<div id="temperatureArrival"> ${temperature}</div>`
//   });




});

const selectDeparturecity = document.querySelector('.departureCity1');

selectDeparturecity.addEventListener('change', (event) => {
  const res = document.querySelector('.depcity');
  localStorage.setItem('depcity', `${event.target.value}`);
//   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + departureCity.value +"&appid=16757cdb1c5e963cb82b1f47805831e7")
//   .then((resp) => resp.json()) // Transform the data into json
//   .then(function (data) {
//   //console.log(data.main.temp - 273)
//   let temperature = (data.main.temp-273).toFixed()
//   document.getElementById("temperatureDeparture").innerHTML += `<div id="temperatureDeparture"> ${temperature}</div>`

//   })
 

  });


  
 
 
 

//const departureTemperature = document.querySelector('.departureCity1');
 // departureTemperature.addEventListener('change', (event) =>{
   //  const deptemp = document.querySelector('#temperatureDeparture')
   // localStorage.setItem('departuretemp',`${event.target.value}`);
   
  //})

//const TemperatureCity = document.querySelector('#temperatureDeparture').innerHTML += `<div id="temperatureDeparture"> ${temperature}</div>`
//console.log(TemperatureCity)


const selectOneWay = document.querySelector('#oneway');

selectOneWay.addEventListener('change', (event) => {
  const selectOneWay = document.querySelector('#oneway');
  localStorage.setItem('way', `${event.target.value}`);
});

const selecttwoWay = document.querySelector('#twoway');

selecttwoWay.addEventListener('change', (event) => {
  const selectOneWay = document.querySelector('#twoway');
  localStorage.setItem('way', `${event.target.value}`);
});

const selectDeparturedate = document.querySelector('.departureDate');

selectDeparturedate.addEventListener('change', (event) => {
  const selectDeparturedate = document.querySelector('.departureDate');
  localStorage.setItem('data wylotu', `${event.target.value}`);
});


const selectArrivaldate = document.querySelector('.arrivalDate');

selectArrivaldate.addEventListener('change', (event) => {
  const selectArrivaldate = document.querySelector('.arrivalDate');
  localStorage.setItem('data powrotu', `${event.target.value}`);
});

const dateArr = ["0131","0228","0229","0331"]

var date = new Date();
d = date.getDate();
m = date.getMonth()+1;
y = date.getFullYear();

if(d<10){
    d1='0'+d
} 
if(m<10){
    m='0'+m
} 
today =y+"-"+m+"-"+d;
// console.log(today)
// todayDate = document.querySelector(".departureDate")
// todayDate.setAttribute(today)
document.querySelector(".departureDate").setAttribute("min",today)

var curdate = new Date(y, m, d)
// console.log(curdate)
d1 = curdate.getDate()
m1 = curdate.getMonth();
y1 = curdate.getFullYear();
// console.log(d1,m1,y1)

if(d1<10){
    d1='0'+d1
} 
if(m1<10){
    m1='0'+m1
} 

d2 = d1+1
console.log(curdate)
tommorow =y1+"-"+m1+"-"+d2;
console.log(tommorow)
document.querySelector(".arrivalDate").setAttribute("min",tommorow)
// document.getElementsByClassName("arrivalDate").setAttribute("value",tommorow)

// console.log(tommorow)


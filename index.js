

const checkbox = document.getElementById('mode-checkbox');

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
})

const selectArrivalcity = document.querySelector('.arrivalCity1');

selectArrivalcity.addEventListener('change', (event) => {
  const result = document.querySelector('.arrcity');
  localStorage.setItem('arrcity', `${event.target.value}`);
});

// document.getElementById('myButton').onclick = function () {
//     location.href = "www.google.com"
// }

// const p = document.getElementById("myButton"); // Find the paragraph element in the page
// p.onclick = showAlert; // Add onclick function to element
  
// function showAlert() {
//  location.href = "www.google.com"}


myButton.addEventListener('click', () =>{
    const myButton = document.getElementById(myButton)
    console.log('dziala');
})

const selectDeparturecity = document.querySelector('.departureCity1');

selectDeparturecity.addEventListener('change', (event) => {
  const res = document.querySelector('.depcity');
  localStorage.setItem('depcity', `${event.target.value}`);

  });


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
document.querySelector(".departureDate").setAttribute("min",today)
var curdate = new Date(y, m, d)
d1 = curdate.getDate()
m1 = curdate.getMonth();
y1 = curdate.getFullYear();

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

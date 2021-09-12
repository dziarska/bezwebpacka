
//import style from "./index.scss"

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
        console.log(buttonValue)
    }
}
);
 selectedSeat(){
     let chosenSeat = document.classList('selected')
     
 }

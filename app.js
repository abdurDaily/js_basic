let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let quantity = document.querySelector('.quantity');
increment.addEventListener('click', function(e){
    quantity.value =  Number(quantity.value) + 1;
    e.preventDefault();
})
decrement.addEventListener('click', function(e){
    if(Number(quantity.value) > 1){
        quantity.value =  Number(quantity.value) - 1;
    }
    e.preventDefault();
})





// RANGE 
let range = document.querySelector('.range');
let rangeResult = document.querySelector('.result-range');
range.addEventListener('input', function(){
  let rangeValue = range.value = Number(range.value);
  rangeResult.innerHTML = rangeValue;
})

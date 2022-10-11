

function getValues(){
    // get the value from the page 
 let startValue = document.getElementById("startValue").value ;
 let endValue = document.getElementById("endValue").value;

 // parse the values in to intengers
startValue = parseInt(startValue);
endValue = parseInt(endValue);


if(Number.isInteger(startValue) && Number.isInteger(endValue)){
let numbers = generateNumbers(startValue,endValue);

}else{
    swal.fire({
        icon:"error",
        Title:"Oops....",
        text: "Only integers are allow for Hundo!"
    });
}
}


function generateNumbers(startValue, endValue){
    let numbers = [];

    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }

    return numbers;

}


function displayNumbers(){


}



function getValues(){
    // get the value from the page 
 let startValue = document.getElementById("startValue").value ;
 let endValue = document.getElementById("endValue").value;

 // parse the values in to intengers
startValue = parseInt(startValue);
endValue = parseInt(endValue);


if(Number.isInteger(startValue) && Number.isInteger(endValue)){

// generate the numbers based on user input
    let numbers = generateNumbers(startValue,endValue);

// display results on page
 displayNumbers(numbers);

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


function displayNumbers(numbers){
let className="even";
let templateRows="";
for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];

        if(number % 2 == 0){
 className="even";
        }else{
className="odd";
        }
        
        if ( i % 10 == 0) { 
            templateRows += "<tr>";
        }

        templateRows += `<td class="${className}">${number}</td> `;

        if((i + 1) % 10 == 0 ){
            templateRows +="</tr>"
        }
}

document.getElementById("results").innerHTML = templateRows;

}

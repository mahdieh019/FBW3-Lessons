document.getElementById("loan-form").addEventListener("submit",calculate);

function calculate(e){
    e.preventDefault();
    let amount=document.getElementById("amount");
    let interest=document.getElementById("interest");
    let years=document.getElementById("years");

    let monthlyPayment=document.getElementById("monthly-payment");
    let principal=parseFloat(amount.value); //to convert string to Number
    let calculatedInterest=parseFloat(interest.value)/100/12;

    let calculatedPayment=parseFloat(years.value)*12;
    console.log(calculatedPayment);

    let x=Math.pow(1 + calculatedInterest,calculatedPayment);
    let monthly=(principal * x * calculatedInterest)/(x-1);
    
    console.log(monthly);
    let totalPayment=monthly.toFixed(2)*calculatedPayment;
    console.log(totalPayment);
    let totalInterest=totalPayment-principal;
    console.log(totalInterest);

    if(isFinite(monthly)){ // to check the result number is or not_
        monthlyPayment.innerHTML=monthly.toFixed(2);
    }  
    else{
        monthlyPayment.innerHTML="Please check your number."
    }
}

/////////////////////////////////////


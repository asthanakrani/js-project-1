function calculateInterest(){
    let p = 10000;
    let r = 10;
    let t = 5;
    
        document.getElementById('principal').innerHTML = "principal";
        document.getElementById('interest').innerHTML = "interest";
        document.getElementById('time').innerHTML = "time";
        // document.getElementById('simpleInterestResul').innerHTML = "simpleInterestResul";
    
    let si = p *(1 +(r * t));
    let interest = si - p;
    
    //  console.log("Simple Interest = " + si);
    
     document.getElementById('calculation').innerHTML = "Simple Interest: " + interest.toFixed(2);
    
    }
function gb(){
var productprice = 550;
var total = 550;
var discount = 20;
var total =productprice;
var discount = 20 * total / 100; 
var bill = total - discount ;  
        document.getElementById('productName').innerHTML = "productName : Suncrime";
        document.getElementById('productprice').innerHTML = "productprice : 550";
        document.getElementById('total').innerHTML = "total : 550 ";
        document.getElementById('discount').innerHTML = "discount :20%";

        document.getElementById('bill').innerHTML = "Total bill: " + bill .toFixed(2);
        
    }
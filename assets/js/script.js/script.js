document.getElementById("btn-1").addEventListener("click", function(){

    var quantity = document.querySelector('#input-1').value; 
    var color = document.querySelector('#input-2').value; 
    var price = document.querySelector('#input-3').value;           
    document.querySelector('.tot').innerHTML=quantity*price;
    document.querySelector('.cant').innerHTML=quantity;
    test.setAttribute("style", `background-color:${color}`).innerHTML;
    });
document.getElementById("btn-1").addEventListener("click", function(){

    var cantidad = document.querySelector('#input-1').value; 
    var color = document.querySelector('#input-2').value; 
    var precio = document.querySelector('#input-3').value;           
    document.querySelector('.tot').innerHTML=cantidad*precio;
    document.querySelector('.cant').innerHTML=cantidad;
    test.setAttribute("style", `background-color:${color}`).innerHTML;
    });
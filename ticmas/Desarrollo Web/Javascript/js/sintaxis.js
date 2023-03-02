
let miVariable;

var variable2;

const IVA = 1.21;

const precio1 = 5;

const precio2 = 10;

let totalSuma = 0;

totalSuma = precio1 + precio2;


function SumarJS (){
    return totalSuma = precio1 + precio2;
}

document.getElementById("boton1").addEventListener("click", function(){
    console.log("capturamos el evento click y sumamos, se agrego el evento escuchador");
    document.getElementById("demogit").innerHTML = totalSuma
});

document.getElementById("back1").addEventListener("click", function () {
    document.body.style.backgroundColor = "#d5d9b8";
});

document.getElementById("back2").addEventListener("click", function () {
    document.body.style.backgroundColor = "whitesmoke";
});

document.getElementById("ocultar_suma").addEventListener("click", function () {
    document.getElementById("demo").style.display = "none"
});


const coleccion = document.getElementsByClassName ("parrafo");
for (let i = 0;i < coleccion.length; i++){
    coleccion[i].style.backgroundColor = "#3483eb";    
}


//comentario de una sola linea

/*
comentario multilinea 
*/

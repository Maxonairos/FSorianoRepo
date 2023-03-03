

const dataP = "datos personales"
const knowledge = "informacion sobre conocimientos"
const tools = "informacion sobre herramientas"
const contact = "informacion de contacto"
const coleccion = ["Data","Herramientas","Conocimientos","Contacto"]

function obtain(tipo){
    if (tipo==1){
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById("info").innerHTML = myObj.hta1+"<br>"+myObj.hta2+"<br>"+myObj.hta3+"<br>"+myObj.hta4+"<br>"+myObj.hta5+"<br>"+myObj.hta6+"<br>"+myObj.hta7+"<br>"+myObj.hta8+"<br>"+myObj.hta9+"<br>"+myObj.hta10+"<br>"+myObj.hta11+"<br>"+myObj.hta12;
        };
        xmlhttp.open("GET", "https://45680e03-f2d0-46b4-91bf-4bc5e2f30fcb.mock.pstmn.io/api/datos?herramientas=1");
        xmlhttp.send();
    } else if (tipo == 2){
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById("info").innerHTML = myObj.con1+"<br>"+myObj.con2+"<br>"+myObj.con3+"<br>"+myObj.con4+"<br>"+myObj.con5+"<br>"+myObj.con6+"<br>"+myObj.con7+"<br>"+myObj.con8+"<br>"+myObj.con9+"<br>"+myObj.con10+"<br>"+myObj.con11+"<br>"+myObj.con12+"<br>"+myObj.con13;
        };
        xmlhttp.open("GET", "https://45680e03-f2d0-46b4-91bf-4bc5e2f30fcb.mock.pstmn.io/api/datos?conocimientos=1");
        xmlhttp.send();
    } else if (tipo == 3){
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById("info").innerHTML = "Nombre: "+myObj.nombre+"<br>"+"Edad: "+myObj.edad+" años"+"<br>"+"Domicilio: "+myObj.domicilio+"<br>"+"Localidad: "+myObj.localidad+"<br>"+"Contacto: "+myObj.contacto+"<br>"+"E-mail: "+myObj.mail;
        };
        xmlhttp.open("GET", "https://45680e03-f2d0-46b4-91bf-4bc5e2f30fcb.mock.pstmn.io/api/datos?personal=1");
        xmlhttp.send();
    }    
}




document.getElementById("Data").addEventListener("click", function () {
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link active";
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link";
    //document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link";
    obtain(3); 
    document.getElementById("intro").style.display="none";
        
})

document.getElementById("Conocimientos").addEventListener("click", function () {
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link active";
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link";
    //document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link";
    obtain(2);
    document.getElementById("intro").style.display="none";    
})        


document.getElementById("Herramientas").addEventListener("click", function () {
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link active";
    //document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link";   
    obtain(1);
    document.getElementById("intro").style.display="none";  
})

/*document.getElementById("Contacto").addEventListener("click", function () {    
    document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link active";
    document.getElementById("info").textContent = contact;
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("intro").style.display="none"; 
})*/

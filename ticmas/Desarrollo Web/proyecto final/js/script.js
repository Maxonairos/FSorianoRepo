

const dataP = "datos personales"
const knowledge = "informacion sobre conocimientos"
const tools = "informacion sobre herramientas"
const contact = "informacion de contacto"
const coleccion = ["Data","Herramientas","Conocimientos","Contacto"]

document.getElementById("Data").addEventListener("click", function () {
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link active";    
    document.getElementById("info").textContent = dataP;
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link"; 
        
})
    document.getElementById("Conocimientos").addEventListener("click", function () {
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link active";
    document.getElementById("info").textContent = knowledge;
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link"; 
    
})        


document.getElementById("Herramientas").addEventListener("click", function () {
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link active";
    document.getElementById("info").textContent = tools;
    document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link";     
})

document.getElementById("Contacto").addEventListener("click", function () {    
    
    document.getElementById("Contacto").className = "flex-sm-fill text-sm-center nav-link active";
    document.getElementById("info").textContent = contact;
    document.getElementById("Herramientas").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Conocimientos").className = "flex-sm-fill text-sm-center nav-link";
    document.getElementById("Data").className = "flex-sm-fill text-sm-center nav-link"; 
})


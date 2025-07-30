let usuarios = [
    { usuario: "Admin1", clave: "94442828", rol: "admin" },
    { usuario: "Vendedor", clave: "v1", rol: "vendedor" },
    { usuario: "Johnny", clave: "jsom2312", rol: "admin" }
];


function asignarTextoElemento(elemento, texto){
    //Asignar un atributo el elemento en este caso un titulo
    let elementoHTML = document.querySelector(elemento);
    //Le asignamos un nombre
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    //asignamos un titulo del login
    asignarTextoElemento('h1','Ingreso al sistema');
    //asignamos el parrafo de usuario
    asignarTextoElemento('p','Ingrese el usuario');
    //asignamos el parrafo de contraseña
    asignarTextoElemento('p2','Ingrese la contraseña');
}

function login() {
    let intentoUsuario = document.getElementById('usuario').value; 
    let intentoContraseña = document.getElementById('contraseña').value;
    let encontrado = usuarios.find(u =>u.usuario === intentoUsuario && u.clave === intentoContraseña);

    if (encontrado) {
        if (encontrado.rol === "admin") {
            alert(`Haz ingresado al sistema ${intentoUsuario}`);
            window.location.href = "admin.html";
            limpiarCaja(); 
        } else if (encontrado.rol === "vendedor") {
            alert(`Haz ingresado al sistema ${intentoUsuario}`);
            window.location.href = "vendedor.html";
            limpiarCaja(); 
        }
    } else if (intentoUsuario === ''){
        alert("Por favor ingrese el usuario");
    }else if (intentoContraseña === ''){
        alert("Por favor ingrese la contraseña");
    } else {
        limpiarCaja(); 
        alert("Usuario o contraseña incorrectos");
    }
    return;
    
}
function limpiarCaja() {
    //Para seleccionar por id utilizamos el # dentro de querySelector y le cambiamos el valor
    document.querySelector('#usuario').value = '';
    document.querySelector('#contraseña').value = '';
    
}


condicionesIniciales();









/*
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//funcion


function verificarIntento(){
    let intentoUsuario = document.getElementById('Usuario').value;
    //El usuario acerto
    if (Usuario === intentoUsuario){


        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {


        //EL usuario no acerto
        if(numerosDeUsuarios > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();     
    }
    return;
}



function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Verificar si ya sorteamos todos los nuemros
    if (listaNumerosSorteados == numeroMaximo) {
        asignarTextoElemento('p','Ya ssortearon todos los números posibles')
    } else {
        //Si el numero generado esta incluidop en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}



function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}


*/
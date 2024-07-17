let numeroSecreto = 0;
let contadorIntentos=0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;
// let parrafo=document.querySelector("p");
// parrafo.innerHTML="Indica un numero secreto entre 1 y 10";
// console.log(numeroSecreto)

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    // console.log(contadorIntentos)
    // alert("Click desde el boton para llamar a la funcion")
    let numeroDeUsuario = parseInt(document.querySelector("#numeroUsuario").value);
    // console.log(numeroDeUsuario)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${contadorIntentos} ${contadorIntentos===1 ? "intento" : "intentos"}`)
        document.getElementById("reiniciar").removeAttribute('disabled')
    } else{
        // El usuario no acerto

        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es mayor")
        } else{
            asignarTextoElemento('p',"El numero secreto es menor")
        }
        contadorIntentos++;
        limpiarCaja()
    }
    return;

}

function limpiarCaja(){
    document.getElementById("numeroUsuario").value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    // si ya sorteamos todos los numeros
  if(listaNumerosSorteados.length === numeroMaximo ){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
  } else {

// si el numero generado esta incluido en la lista

        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos=1
}

function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja()
    // indicar mensaje de intervalo de numeros
    // reiniciar el numero de intentos
    // reiniciar el numero secreto
    condicionesIniciales()
    // deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute('disabled','true')
}

condicionesIniciales();

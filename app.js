"use strict";


//Expresiones boolueanas
//true y false== 1 y 0== positivo y negativo

// let estado=false

// if (estado) {
//     console.log('continuar')
// } else {
//     console.log('detenerse')
// }
//operador ternario
// let accion= estado ? 'continuar':'detenerse'

// console.log(accion)

//la igualdad

//== ===

// if (1=='1') {
//         console.log('son iguales')
//      } else {
//          console.log('son diferentes')
//      }


//Funciones

//a===> es vocal?

// function esVocal(letra){
//    if(letra=='a' ||letra=='e'||letra=='i'||letra=='o'||letra=='u'){
//     console.log('es un vocal')
//    }
//    else{
//     console.log('no es vocal')
//    }
// }


// esVocal('a')
function esImparOPar(numero){
     let resultado = ((numero % 2)==0)?'par':'impar'
     return resultado
}


console.log(esImparOPar(2))
console.log(mensaje)










// Funciones 

// function calcularTabla(){
//    let valor=parseInt( prompt('Ingrese que tabal de multiplicar quiere saber:'))
//    for (let i = 1; i <=10; i++) {
//         let resultado=i*valor
//         document.write(i+" * "+ valor+ " = " + resultado+'<br>')
//    }
   
// }

// calcularTabla()


// function mostrarMenor(a,b,c){

// }

// let valor1 = parseInt( prompt('ingrese primer numero'))
// let valor2 = parseInt( prompt('ingrese segundo numero'))
// let valor3 = parseInt( prompt('ingrese tercero numero'))
// document.write('los 3 valores ingresados son :'+ valor1 +' '+valor2+' '+ valor3 )

// mostrarMenor(valor1,valor2,valor3)


// function sumar(num_1,num_2){
// let resultado=num_1+num_2
// return resultado

// }

// let numero1=8
// let numero2=6
// let tomoResultado=sumar(numero1,numero2)
// console.log(tomoResultado)


// document.write(resultado)
// console.log(resultado)

/*function obtenerNombreCompleto(nombre,apellido){
let juntos= nombre+' '+apellido
return juntos

}
console.log(obtenerNombreCompleto('manuel','lopez'))*/

// function segundos(hora){
//     let resultado=hora*3600
//     return resultado
// }
// console.log(segundos(1))

//pepe@gmail.com

//juan
//@hotmail

// function emailCompleto (nombre, dominio,otro) {
//     return nombre + dominio+otro
// }

// console.log(emailCompleto('joaquin','@gmail','.com'))





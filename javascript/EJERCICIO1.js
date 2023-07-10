const bello = document.querySelector('#bello')
const respuesta = document.querySelector('#respuesta')
const numero = document.querySelector('#input1')
const boton1 = document.querySelector('#numeroentre2')
const respuesta2 = document.querySelector('#respuesta2')
const numero2 = document.querySelector('#input2')
const boton2 = document.querySelector('#par')
const numero3 = document.querySelector('#input3')
const boton3 = document.querySelector('#cliente')
const respuesta3 = document.querySelector('#respuesta3')
const numero4 = document.querySelector('#input4')
const numero5 = document.querySelector('#input5')
const boton4 = document.querySelector('#mayor2')
const respuesta4 = document.querySelector('#respuesta4')
const numero6 = document.querySelector('#input6')
const numero7 = document.querySelector('#input7')
const numero8 = document.querySelector('#input8')
const boton5 = document.querySelector('#mayor3')
const respuesta5 = document.querySelector('#respuesta5')
const dia = document.querySelector('#dia')
const respuesta6 = document.querySelector('#respuesta6')
const calificacion = document.querySelector('#input9')
const boton6 = document.querySelector('#status')
const respuesta7 = document.querySelector('#respuesta7')
const topping = document.querySelector('#input10')
const boton7 = document.querySelector('#topping')
const respuesta8 = document.querySelector('#respuesta8')
const curso = document.querySelector('#curso')
const beca = document.querySelector('#beca')
const respuesta9 = document.querySelector('#respuesta9')
const boton8 = document.querySelector('#pago')
const trasnporte = document.querySelector('#transporte')
const km = document.querySelector('#km')
const boton9 = document.querySelector('#pagar')
const respuesta10 = document.querySelector('#respuesta10')

bello.addEventListener('change', (e) => {
  e.preventDefault();
  if(bello.value === "Si"){
    respuesta.innerHTML = "Ciertamente"
  } else {
    respuesta.innerHTML = "No te creo"
  }
})

boton1.addEventListener('click', (e) => {
  e.preventDefault();
  let a = numero.value % 2;
  if (a == 0) {
    respuesta2.innerHTML = "El número " + numero.value + " es divisible entre 2"
  } else {
    respuesta2.innerHTML = "El número " + numero.value + " no es divisible entre 2"
  }
})

boton2.addEventListener('click', (e) => {
  e.preventDefault();
  let a = numero2.value % 2;
  if (a == 0) {
    alert("EL numero " + numero2.value + " es par")
  } else {
    alert("EL numero " + numero2.value + " no es par")
  }
})

boton3.addEventListener('click', (e) => {
  e.preventDefault();
  if (numero3.value == 1000) {
    respuesta3.innerHTML = "Ganaste un premio"
  } else {
    respuesta3.innerHTML = "Lo siento sigue participando"
  }
})

boton4.addEventListener('click', (e) => {
  e.preventDefault();
  if (numero4.value > numero5.value) {
    respuesta4.innerHTML = numero4.value + " es mayor que " + numero5.value
  } else {
    respuesta4.innerHTML = numero5.value + " es mayor que " + numero4.value
  }
})

boton5.addEventListener('click', (e) => {
  e.preventDefault();
  if (Number(numero6.value) > Number(numero7.value)) {
    if(Number(numero7.value) > Number(numero8.value)){
      respuesta5.innerHTML = "El orden es " + numero6.value + ", " + numero7.value + ", " + numero8.value
    } else if (Number(numero6.value) > Number(numero8.value)) {
      respuesta5.innerHTML = "El orden es " + numero6.value + ", " + numero8.value + ", " + numero7.value
    } else {
      respuesta5.innerHTML = "El orden es " + numero8.value + ", " + numero6.value + ", " + numero7.value
    }
  } else if (Number(numero6.value) == Number(numero7.value) || Number(numero6.value) == Number(numero8.value) || Number(numero7.value) == Number(numero8.value)){
    respuesta5.innerHTML = "2 numeros son iguales ingresa distintos numeros"
  } else {
    if (Number(numero6.value) > Number(numero8.value)){
      respuesta5.innerHTML = "El orden es " + numero7.value + ", " + numero6.value + ", " + numero8.value
    } else if (Number(numero7.value) > Number(numero8.value)) {
      respuesta5.innerHTML = "El orden es " + numero7.value + ", " + numero8.value + ", " + numero6.value
    } else {
      respuesta5.innerHTML = "El orden es " + numero8.value + ", " + numero7.value + ", " + numero6.value
    }
  } 
})

dia.addEventListener('change', (e) => {
  e.preventDefault();
  switch (dia.value) {
    case 'Lunes':
      respuesta6.innerHTML = "Hola buen lunes"
      break;
    case 'Martes':
      respuesta6.innerHTML = "Suerte en tu dia"
      break;
    case 'Miercoles':
      respuesta6.innerHTML = "Que tengas buen hombligo de semana"
      break;
    case 'Jueves':
      respuesta6.innerHTML = "Ya Jueves"
      break;
    case 'Viernes':
      respuesta6.innerHTML = "Por fin Viernes"
      break;
    case 'Sabado':
      respuesta6.innerHTML = "Sabaduki"
      break;
    case 'Domingo':
      respuesta6.innerHTML = "Domingo con la familia"
      break;
    default:
      respuesta6.innerHTML = "Hola selecciona que dia es"
    }
})

boton6.addEventListener('click', (e) => {
  e.preventDefault();
  cali = Number(calificacion.value);
  if (cali >= 0 && cali <= 10){
    if (cali < 6) {
      respuesta7.innerHTML = "Reprobado"
    } else if (cali >= 6 && cali <= 8){
      respuesta7.innerHTML = "Regular"
    } else if (cali == 9){
      respuesta7.innerHTML = "Bien"
    } else if (cali == 10){
      respuesta7.innerHTML = "Exelente"
    }
  } else {
    respuesta7.innerHTML = "Porfavor ingrese un numero entre 0 y 10"
  }
})

boton7.addEventListener('click', (e) => {
  e.preventDefault();
  topp = topping.value.toLowerCase();
  switch (topp) {
    case 'oreo':
      respuesta8.innerHTML = "Debes pagar 60 MXN"
      break;
    case 'kitkat':
      respuesta8.innerHTML = "Debes pagar 65 MXN"
      break;
    case 'brownie':
      respuesta8.innerHTML = "Debes pagar 70 MXN"
      break;
    default:
      respuesta8.innerHTML = "Lo sentimos, no contamos con ese topping, debes pagar 50 MXN"
      break;
  }
})

boton8.addEventListener('click', (e) => {
  e.preventDefault();
  pay = 0;
  curso1 = curso.value.toLowerCase();
  beca1 = beca.value.toLowerCase();
  switch (curso1) {
    case "course":
      pay = 4999;
      switch (beca1) {
        case "facebook":
          pay = (pay * 0.8).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 2 + " MXN"
          break;
        case "google":
          pay = (pay * 0.85).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 2 + " MXN"
          break;
        case "jesua":
          pay = (pay * 0.5).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 2 + " MXN"
          break;
        default:
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 2 + " MXN"
          break;
      }
      break;
    case "carrera":
      pay = 3999;
      switch (beca1) {
        case "facebook":
          pay = (pay * 0.8).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 6 + " MXN"
          break;
        case "google":
          pay = (pay * 0.85).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 6 + " MXN"
          break;
        case "jesua":
          pay = (pay * 0.5).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 6 + " MXN"
          break;
        default:
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 6 + " MXN"
          break;
      }
      break;
    case "master":
      pay = 2999;
      switch (beca1) {
        case "facebook":
          pay = (pay * 0.8).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 12 + " MXN"
          break;
        case "google":
          pay = (pay * 0.85).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 12 + " MXN"
          break;
        case "jesua":
          pay = (pay * 0.5).toFixed(2);
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 12 + " MXN"
          break;
        default:
          respuesta9.innerHTML = "Tu pago mensual sera " + pay + " MXN y en total tu inversiòn será: " + pay * 12 + " MXN"
          break;
      }
      break;
    default:
      break;
  }
})

boton9.addEventListener('click', (e) => {
  e.preventDefault();
  pay = 0.0;
  trans = trasnporte.value.toLowerCase();
  km1 = Number(km.value)
  switch (trans) {
    case "auto":
      pay = Number(Number(0.20 * km1).toFixed(2));
      if (km1 >= 0 && km1 <= 100){
        pay = pay + 5;
      } else if (km1 > 100){
        pay = pay + 10;
      }
      respuesta10.innerHTML = "El pago total sera " + pay + " MXN";
      break;
    case "moto":
      pay = Number(Number(0.10 * km1).toFixed(2));
      if (km1 >= 0 && km1 <= 100){
        pay = pay + 5;
      } else if (km1 > 100){
        pay = pay + 10;
      }
      respuesta10.innerHTML = "El pago total sera " + pay + " MXN";
      break;
    case "autobus":
      pay = Number(Number(0.50 * km1).toFixed(2));
      if (km1 >= 0 && km1 <= 100){
        pay = pay + 5;
      } else if (km1 > 100){
        pay = pay + 10;
      }
      respuesta10.innerHTML = "El pago total sera " + pay + " MXN";
      break;
    default:
      break;
  }
})
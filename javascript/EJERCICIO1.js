const bello = document.querySelector('#bello')
const respuesta = document.querySelector('#respuesta')
const numero = document.querySelector('#input1')
const boton1 = document.querySelector('#numeroentre2')
const respuesta2 = document.querySelector('#respuesta2')
const numero2 = document.querySelector('#input2')
const boton2 = document.querySelector('#par')

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
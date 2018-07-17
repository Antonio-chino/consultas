const colors = require('colors')
const read = require('readline-sync')
const menu = ['Alta de alumno', 'Consulta']

console.log(`${colors.white.bold('================')}`)
console.log(`${colors.white.bold('MENU DE OPCIONES')}`)
console.log(`${colors.white.bold('================')}`)


let opcion = 1
let alumno = {}
let listaAlumno = []

while (menu[opcion] !== undefined) {
  opcion = read.keyInSelect(menu, `${colors.yellow.bold('Elige una opcion del menu?')}`)
  console.log('Ok, tu seleccionste la opción ' + menu[opcion] + ' del Menu.')

  let Matricula = 0
  let Curp = ''
  let Nombre= ''
  let ApellidoPaterno= ''
  let ApellidoMaterno= ''
  let Genero= ''
  let FechaNaciemiento= ''
  let Carrera= ''
  let Turno= ''
  let Telefono= ''
  let Correo= ''
  let Twitter= ''
  let Calle= ''
  let NumExt= ''
  let NumInt= ''
  let Colonia= ''
  let CodigoPostal=''
  let CiudadMunicipio= ''
  let Entidad= ''




  console.log('Estoy revisando el valor ' , menu[opcion]);

  if (menu[opcion] !== undefined) {


    switch (menu[opcion]) {
      case 'Alta de alumno': Datos(alumno)
        break
      case 'Consulta': consulta(listaAlumno)
        break

    }
  }
}

read.question(`${colors.red.bold('Haz salido del sistema, presiona cualquier tecla para terminar !!!')}`)

function Datos (alumno) {

  Matricula = read.question('Matricula: ')
  Curp = read.question('Curp: ')
  Nombre = read.question('Nombre: ')
  ApellidoPaterno = read.question('Apellido Paterno:  ')
  ApellidoMaterno = read.question('Apellido Materno: ')
  Genero = read.question('Genero: ')
  FechaNaciemiento = read.question('Fecha Nacimiento: ')
  Carrera = read.question('Carrera:  ')
  Turno = read.question('Turno: ')
  Telefono = read.question('Telefono: ')
  Correo = read.question('Correo: ')
  Twitter = read.question('Twitter: ')
  Calle = read.question('Calle: ')
  NumExt = read.question('Numero Exterior: ')
  NumInt = read.question('Numero Interior: ')
  Colonia = read.question('Colonia: ')
  CodigoPostal = read.question('Codigo Postal: ')
  CiudadMunicipio = read.question('Ciudad/Municipio: ')
  Entidad = read.question('Entidad: ')

  alumno = {
    Matricula,
    Curp ,
    Nombre,
    ApellidoPaterno,
    ApellidoMaterno,
    Genero,
    FechaNaciemiento,
    Carrera,
    Turno,
    Telefono,
    Correo,
    Twitter,
    Calle,
    NumExt,
    NumInt,
    Colonia,
    CodigoPostal,
    CiudadMunicipio,
    Entidad,


  }



  let yesNot = read.question(`¿Esta seguro de almacenar los datos del alumno? [Si/No]`)
  console.log(`${colors.green.bold('Estas en la función Alta Alumno')}.`)
  if(yesNot.toUpperCase() == 'S'){
    console.log(`${colors.green.bold('Guardar en arreglo')}.`)
    listaAlumno.push(alumno)
  }
  else{
    console.log('No guardar nada')
  }

  //ead.question(`${colors.yellow.bold('Presiona cualquier tecla para regresar al Menu Principal !!!')}`)
}

function consulta (listaAlumno) {
  console.log(`${colors.green.bold('Estas en la función Consulta')}`)
  console.log(listaAlumno)
  read.question(`${colors.yellow.bold('Presiona cualquier tecla para regresar al Menu Principal !!!')}`)
}

﻿﻿var form = document.querySelector('form');
var usuario = document.getElementById('usuario');
var clave = document.getElementById('clave');
var submit = document.getElementById('submit');
var para = document.querySelector('div');
form.onsubmit = function(e) {
if (clave.value === ''){
        e.preventDefault();
        para.textContent = 'Debes ingresar la clave!';}
if (usuario.value === ''){
        e.preventDefault();
        para.textContent = 'Debes ingresar el usuario!';}
else if ( !usuario.value.includes("@")){
        e.preventDefault();
        para.textContent = 'El usuario debe contener @!';}
 

}
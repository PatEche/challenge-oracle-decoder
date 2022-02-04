/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var inputText = document.querySelector("#input-texto");
var inputMsg = document.querySelector("#msg");
inputText.focus();

var buttonEncript = document.querySelector("#btn-encriptar");
var buttonDecript = document.querySelector("#btn-desencriptar");
var buttonCopy = document.querySelector("#btn-copy");

function encript() {
  text = inputText.value;
  textoEncriptado = text
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  inputMsg.value = textoEncriptado;
  inputText.value = "";
}
buttonEncript.onclick = encript;

function desencriptar() {
  text = inputText.value;
  textoDesencriptado = text
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "uf");
  inputMsg.value = textoDesencriptado;
  inputText.value = "";
}
buttonDecript.onclick = desencriptar;

buttonCopy.addEventListener("click", function (event) {
  navigator.clipboard.writeText(inputMsg.value);
  inputMsg.value = "";
  inputText.focus();
});

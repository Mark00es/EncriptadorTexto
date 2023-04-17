function cifrarTexto(texto){
    var salida = texto.replace("e","enter");
    salida = salida.replace("i","imes");
    salida = salida.replace("a","ai");
    salida = salida.replace("o","ober");
    salida = salida.replace("u","ufat");
    return salida;
}
function descifrarTexto(texto){
    var salida = texto.replace("enter","e");
    salida = salida.replace("imes","i");
    salida = salida.replace("ai","a");
    salida = salida.replace("ober","o");
    salida = salida.replace("ufat","u");
    return salida;
}
function encriptar(){
    var texto = document.getElementById("mensaje").value;
    var txtcifrado = cifrarTexto(texto);
    document.getElementById("texto").style.display = "none";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("texto-entrada").innerHTML = txtcifrado;    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    return secreto;
}

function desencriptar(){
    var texto = document.getElementById("mensaje").value;
    var txtcifrado = descifrarTexto(texto);
    document.getElementById("texto").style.display = "none";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("texto-entrada").innerHTML = txtcifrado;    
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copiar(){
    var contenido = document.querySelector("#texto-entrada");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio")
}
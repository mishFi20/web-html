function like(){
    var contador = document.getElementById("contador");
    var valor = parseInt(contador.innerText) + 1;
    contador.innerText = valor;

}
function dislike(){
    var contador = document.getElementById("contador_dislike");
    var valor = parseInt(contador.innerText) + 1;
    contador.innerText = valor;
}
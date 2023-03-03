var lista= [];
function enviar() {
    var nome = document.getElementById("nome").value;
    lista.push (nome);
    var comprimento = lista.length;
    document.getElementById("mostrar").innerHTML = lista.toString();
    document.getElementById("mostrar").value = "";
} 
function mostrar() {
    var i = lista.join("<br>");
    document.getElementById("a").innerHTML = i;
}
function organizar() {
    lista.sort();
    var organiza = lista.join("<br>");
    document.getElementById("e").innerHTML = organiza;
}
function pesquisar() {
    var nome1 = document.getElementById("procurar").value;
    var quant = 0;
    for(var x = 0; x < lista.length; x++) {
        if(nome1==lista[x]) {
            quant = quant+1;
        }
    }
    document.getElementById("nomesencontrados").innerHTML = "nome encontrado" + quant + "vezes";
}
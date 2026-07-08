function ir(p){
location.href = p;
}

// salva dados temporários
function salvarTemp(chave, valor){
localStorage.setItem(chave, valor);
}

// salva registro completo (array)
function salvarRegistro(){
let registros = JSON.parse(localStorage.getItem("registros")) || [];

let registro = {
data: localStorage.getItem("data"),
tipo: localStorage.getItem("tipo"),
descricao: localStorage.getItem("descricao"),
placa: localStorage.getItem("placa"),
motorista: localStorage.getItem("motorista"),
seguranca: localStorage.getItem("seguranca"),
kmInicialDesloc: localStorage.getItem("kmInicialDesloc"),
kmFinalDesloc: localStorage.getItem("kmFinalDesloc")
};

registros.push(registro);
localStorage.setItem("registros", JSON.stringify(registros));

alert("Registro salvo!");
}

// PAGINA 2
function salvarPagina2(){
const data = document.getElementById("data").value;
const tipo = document.querySelector('input[name="tipo"]:checked');
const descricao = document.getElementById("descricao").value;

if(!tipo){
alert("Selecione o tipo");
return;
}

salvarTemp("data", data);
salvarTemp("tipo", tipo.value);
salvarTemp("descricao", descricao);

ir("pagina3.html");
}

// PAGINA 3
function salvarPagina3(){
salvarTemp("placa", document.getElementById("placa").value);
salvarTemp("motorista", document.getElementById("motorista").value);
salvarTemp("seguranca", document.getElementById("seguranca").value);

ir("pagina4.html");
}

// PAGINA 4
function salvarPagina4(){
salvarTemp("kmInicialDesloc", document.getElementById("km").value);
ir("pagina5.html");
}

// PAGINA FINAL
function finalizar(){
salvarRegistro();
ir("index.html");
}

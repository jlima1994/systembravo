function ir(p){
location.href = p;
}

function salvarTemp(chave, valor){
localStorage.setItem(chave, valor);
}

// ================= PAGINA 2 =================
function salvarPagina2(){
const data = document.getElementById("data").value;
const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
const descricao = document.getElementById("descricao").value;

if(!tipoSelecionado){
alert("Selecione o tipo!");
return;
}

salvarTemp("data", data);
salvarTemp("tipo", tipoSelecionado.value);
salvarTemp("descricao", descricao);

ir("pagina3.html");
}

// ================= PAGINA 3 =================
function salvarPagina3(){
salvarTemp("placa", document.getElementById("placa").value);
salvarTemp("motorista", document.getElementById("motorista").value);
salvarTemp("seguranca", document.getElementById("seguranca").value);

ir("pagina4.html");
}

// ================= PAGINA 4 =================
function salvarPagina4(){
const hora = document.getElementById("horaInicialDesloc").value;
const km = document.getElementById("kmInicialDesloc").value;

if(hora === "" || km === ""){
alert("Preencha todos os campos!");
return;
}

salvarTemp("horaInicialDesloc", hora);
salvarTemp("kmInicialDesloc", km);

ir("pagina5.html");
}

// ================= PAGINA 5 =================
function salvarPagina5(){
const hora = document.getElementById("horaInicialServico").value;
const km = document.getElementById("kmInicialServico").value;

if(hora === "" || km === ""){
alert("Preencha todos os campos!");
return;
}

salvarTemp("horaInicialServico", hora);
salvarTemp("kmInicialServico", km);

ir("pagina6.html");
}

// ================= PAGINA 6 =================
function salvarPagina6(){
const hora = document.getElementById("horaFinalServico").value;
const km = document.getElementById("kmFinalServico").value;

if(hora === "" || km === ""){
alert("Preencha todos os campos!");
return;
}

salvarTemp("horaFinalServico", hora);
salvarTemp("kmFinalServico", km);

ir("pagina7.html");
}

// ================= PAGINA 7 =================
function salvarPagina7(){
const hora = document.getElementById("horaFinalDesloc").value;
const km = document.getElementById("kmFinalDesloc").value;

if(hora === "" || km === ""){
alert("Preencha todos os campos!");
return;
}

salvarTemp("horaFinalDesloc", hora);
salvarTemp("kmFinalDesloc", km);

ir("pagina8.html");
}

// ================= PAGINA 8 =================
function salvarPagina8(){

let pedagios = [];

for(let i=0;i<10;i++){
let qtd = document.getElementById("qtd"+i).value;
let valor = document.getElementById("valor"+i).value;

```
if(qtd > 0){
  pedagios.push({
    quantidade: qtd,
    valor: valor
  });
}
```

}

localStorage.setItem("pedagios", JSON.stringify(pedagios));

ir("pagina9.html");
}

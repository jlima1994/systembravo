function ir(p){ location.href = p; }

// =====================
// PÁGINAS INICIAIS
// =====================
function salvarPagina2(){

const data = document.getElementById("data").value;

const tipoSelecionado = document.querySelector('input[name="tipo"]');
if(!tipoSelecionado){
alert("Selecione o tipo de serviço!");
return;
}

const tipo = tipoSelecionado.value;

const descricao = document.getElementById("descricao").value;

localStorage.setItem("data", data);
localStorage.setItem("tipo", tipo);
localStorage.setItem("descricao", descricao);

ir("pagina3.html");
}

function salvarPagina3(){
const placa = document.getElementById("placa").value;
const regex = /^[A-Z]{3}-[0-9][A-Z0-9][0-9]{2}$/i;

if(!regex.test(placa)){
alert("Placa inválida");
return;
}

localStorage.setItem("placa", placa);
localStorage.setItem("motorista", motorista.value);
localStorage.setItem("seguranca", seguranca.value);

ir("pagina4.html");
}

// =====================
// SALVAR ETAPAS
// =====================
function salvar(horaId, kmId, prox){
localStorage.setItem(horaId, document.getElementById(horaId).value);
localStorage.setItem(kmId, document.getElementById(kmId).value);
ir(prox);
}

// =====================
// FINALIZAR REGISTRO (MULTIPLOS)
// =====================
function finalizarRegistro(){

let pedagios = [];

for(let i=0;i<10;i++){
let qtd = document.getElementById("qtd"+i).value;
let val = document.getElementById("val"+i).value;

```
if(qtd > 0){
  pedagios.push({ qtd, val });
}
```

}

const registro = {
data: localStorage.getItem("data"),
tipo: localStorage.getItem("tipo"),
descricao: localStorage.getItem("descricao"),
placa: localStorage.getItem("placa"),
motorista: localStorage.getItem("motorista"),
seguranca: localStorage.getItem("seguranca"),

```
hora4: localStorage.getItem("hora4"),
km4: Number(localStorage.getItem("km4")),

hora5: localStorage.getItem("hora5"),
km5: Number(localStorage.getItem("km5")),

hora6: localStorage.getItem("hora6"),
km6: Number(localStorage.getItem("km6")),

hora7: localStorage.getItem("hora7"),
km7: Number(localStorage.getItem("km7")),

pedagios: pedagios
```

};

let lista = JSON.parse(localStorage.getItem("registros")) || [];

lista.push(registro);

localStorage.setItem("registros", JSON.stringify(lista));

// limpar dados temporários
[
"data","tipo","descricao","placa","motorista","seguranca",
"hora4","km4","hora5","km5","hora6","km6","hora7","km7"
].forEach(k => localStorage.removeItem(k));

alert("Registro salvo com sucesso!");

ir("pagina9.html");
}

// =====================
// RESENHA (AGORA PEGA O ÚLTIMO)
// =====================
function gerarResenha(){

let lista = JSON.parse(localStorage.getItem("registros")) || [];
let r = lista[lista.length - 1];

if(!r){
document.getElementById("resenha").innerText = "Nenhum registro encontrado.";
return;
}

let kmTotal = r.km7 - r.km4;

let pedagios = r.pedagios
.map(p => `${p.qtd}x R$${p.val}`)
.join("\n");

document.getElementById("resenha").innerText = `
${r.data}

Equipe:
Veículo: ${r.placa}
Mot: ${r.motorista}
Seg: ${r.seguranca}

${r.tipo}
${r.descricao}

Deslocamento: ${r.km4} ${r.hora4}
Inicio: ${r.km5} ${r.hora5}
Final: ${r.km6} ${r.hora6}
Deslocamento: ${r.km7} ${r.hora7}

Total KM: ${kmTotal}

Pedágios:
${pedagios}
`;
}

// =====================
// RELATÓRIO (MULTIPLOS)
// =====================
function mostrarTabela(){

let lista = JSON.parse(localStorage.getItem("registros")) || [];

if(lista.length === 0){
document.getElementById("tabela").innerHTML = "Nenhum registro encontrado.";
return;
}

let html = `

<table border="1">
<tr>
<th>Data</th>
<th>Tipo</th>
<th>KM Inicial</th>
<th>KM Final</th>
<th>KM Total</th>
<th>Valor</th>
</tr>
`;

let totalKm = 0;
let totalValor = 0;

lista.forEach(r => {
let kmTotal = r.km7 - r.km4;

```
totalKm += kmTotal;
totalValor += 190;

html += `
```

<tr>
<td>${r.data}</td>
<td>${r.tipo}</td>
<td>${r.km4}</td>
<td>${r.km7}</td>
<td>${kmTotal}</td>
<td>190</td>
</tr>
`;
  });

html += `

<tr>
<td colspan="4"><b>TOTAIS</b></td>
<td><b>${totalKm}</b></td>
<td><b>${totalValor}</b></td>
</tr>
</table>
`;

document.getElementById("tabela").innerHTML = html;
}

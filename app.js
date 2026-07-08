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
  try {

    const horaEl = document.getElementById("horaInicialDeslocamento");
    const kmEl = document.getElementById("kmInicialDeslocamento");

    if(!horaEl || !kmEl){
      alert("Erro: campos não encontrados");
      return;
    }

    const hora = horaEl.value;
    const km = kmEl.value;

    if(hora === "" || km === ""){
      alert("Preencha todos os campos!");
      return;
    }

    localStorage.setItem("horaInicialDeslocamento", hora);
    localStorage.setItem("kmInicialDeslocamento", km);

    location.href = "pagina5.html";

  } catch(e){
    alert("Erro: " + e.message);
  }
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
  const hora = document.getElementById("horaFinalDeslocamento").value;
  const km = document.getElementById("kmFinalDeslocamento").value;

  if(hora === "" || km === ""){
    alert("Preencha os campos");
    return;
  }

  localStorage.setItem("horaFinalDeslocamento", hora);
  localStorage.setItem("kmFinalDeslocamento", km);

  location.href = "pagina8.html";
}
// ================= PAGINA 8 =================
function salvarPagina8(){
  try {

    let pedagios = [];

    for(let i = 1; i <= 10; i++){

      const qtdEl = document.getElementById("qtdPedagio" + i);
      const valEl = document.getElementById("valorPedagio" + i);

      if(!qtdEl || !valEl) continue;

      const qtd = parseInt(qtdEl.value) || 0;
      const valor = parseFloat(valEl.value) || 0;

      if(qtd > 0){
        pedagios.push({
          quantidade: qtd,
          valor: valor
        });
      }
    }

    // salva no localStorage
    localStorage.setItem("pedagios", JSON.stringify(pedagios));

    alert("Pedágios salvos com sucesso!");

    // vai pra próxima página
    location.href = "pagina9.html";

  } catch(e){
    alert("Erro: " + e.message);
  }
}

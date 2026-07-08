function salvarPagina2(){

  const data = document.getElementById("data").value;
  const tipo = document.querySelector("input[name='tipo']:checked")?.value;
  const descricao = document.getElementById("descricao").value;

  if(!data || !tipo){
    alert("Preencha tudo");
    return;
  }

  const d = data.split("-");
  const dataBR = `${d[2]}/${d[1]}/${d[0]}`;

  sessionStorage.setItem("data", dataBR);
  sessionStorage.setItem("tipo", tipo);
  sessionStorage.setItem("descricao", descricao);

  location.href = "pagina3.html";
}

function salvarPagina3(){
  sessionStorage.setItem("motorista", motorista.value);
  sessionStorage.setItem("seguranca", seguranca.value);
  location.href = "pagina4.html";
}

function salvarPagina4(){
  sessionStorage.setItem("placa", placa.value);
  location.href = "pagina5.html";
}

function salvarPagina5(){
  sessionStorage.setItem("kmInicial", kmInicial.value);
  location.href = "pagina6.html";
}

function salvarPagina6(){
  sessionStorage.setItem("kmFinal", kmFinal.value);
  location.href = "pagina7.html";
}

function salvarPagina7(){
  sessionStorage.setItem("pedagio", pedagio.value);
  location.href = "pagina8.html";
}

async function finalizarRegistro(){

  const dados = {
    data: sessionStorage.getItem("data"),
    tipo: sessionStorage.getItem("tipo"),
    descricao: sessionStorage.getItem("descricao"),
    motorista: sessionStorage.getItem("motorista"),
    seguranca: sessionStorage.getItem("seguranca"),
    placa: sessionStorage.getItem("placa"),
    kmInicial: sessionStorage.getItem("kmInicial"),
    kmFinal: sessionStorage.getItem("kmFinal"),
    pedagio: sessionStorage.getItem("pedagio")
  };

  await salvarRegistro(dados);

  sessionStorage.clear();

  location.href = "pagina9.html";
}

// RESUMO
function carregarResumo(){

  const texto = `
  ${sessionStorage.getItem("data")}

  ${(sessionStorage.getItem("tipo") + " " + sessionStorage.getItem("descricao")).toUpperCase()}

  EQUIPE:
  ${sessionStorage.getItem("motorista")}
  ${sessionStorage.getItem("seguranca")}

  VEÍCULO:
  ${sessionStorage.getItem("placa")}

  KM:
  ${sessionStorage.getItem("kmInicial")} → ${sessionStorage.getItem("kmFinal")}
  `;

  document.getElementById("resumo").innerText = texto;
}

// segurança contra erro
if (window.location.pathname.includes("pagina9")){
  if(typeof carregarResumo === "function"){
    carregarResumo();
  }
}

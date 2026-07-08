// ================== PAGINA 2 ==================
function salvarPagina2(){

  const data = document.getElementById("data").value;
  const tipo = document.querySelector("input[name='tipo']:checked")?.value;
  const descricao = document.getElementById("descricao").value;

  if(!data || !tipo){
    alert("Preencha todos os campos!");
    return;
  }

  const d = data.split("-");
  const dataBR = `${d[2]}/${d[1]}/${d[0]}`;

  sessionStorage.setItem("data", dataBR);
  sessionStorage.setItem("tipo", tipo);
  sessionStorage.setItem("descricao", descricao);

  location.href = "pagina3.html";
}

// ================== PAGINA 3 ==================
function salvarPagina3(){
  sessionStorage.setItem("motorista", document.getElementById("motorista").value);
  sessionStorage.setItem("seguranca", document.getElementById("seguranca").value);
  location.href = "pagina4.html";
}

// ================== PAGINA 4 ==================
function salvarPagina4(){
  sessionStorage.setItem("placa", document.getElementById("placa").value);
  location.href = "pagina5.html";
}

// ================== PAGINA 5 ==================
function salvarPagina5(){
  sessionStorage.setItem("kmInicial", document.getElementById("kmInicial").value);
  location.href = "pagina6.html";
}

// ================== PAGINA 6 ==================
function salvarPagina6(){
  sessionStorage.setItem("kmFinal", document.getElementById("kmFinal").value);
  location.href = "pagina7.html";
}

// ================== PAGINA 7 ==================
function salvarPagina7(){
  sessionStorage.setItem("pedagio", document.getElementById("pedagio").value);
  location.href = "pagina8.html";
}

// ================== FINAL ==================
function finalizarRegistro(){

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

  let lista = JSON.parse(localStorage.getItem("registros")) || [];
  lista.push(dados);
  localStorage.setItem("registros", JSON.stringify(lista));

  // mantém dados para resumo
  sessionStorage.setItem("ultimoRegistro", JSON.stringify(dados));

  sessionStorage.clear();

  location.href = "pagina9.html";
}

// ================== RESUMO ==================
function carregarResumo(){

  const dados = JSON.parse(sessionStorage.getItem("ultimoRegistro"));

  if(!dados) return;

  const texto = `
${dados.data}

${(dados.tipo + " " + dados.descricao).toUpperCase()}

EQUIPE:
${dados.motorista}
${dados.seguranca}

VEÍCULO:
${dados.placa}

KM:
${dados.kmInicial} → ${dados.kmFinal}

PEDÁGIO:
R$ ${dados.pedagio}
`;

  document.getElementById("resumo").innerText = texto;
}

// ================== NOVO ==================
function novo(){
  window.location.href = "pagina2.html";
}

// ================== EXECUÇÃO SEGURA ==================
if (window.location.pathname.includes("pagina9.html")) {
  if (typeof carregarResumo === "function") {
    carregarResumo();
  }
}

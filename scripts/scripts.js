carregaDados();

function carregaDados() {
  carregaInfos();
  carregaPistas();
  carregaPilotos();
  carregaEquipes();
}

function carregaPistas() {
  let aux = 0;
  let html = "";
  for (item of pistas) {
    aux ++;
    const { local } = item;
    const { bandeira, pista } = item.imagens;
    const { nome, primeiro_gp, num_voltas, comp_circuito, dist_corrida, volta_record } = item.info;

    html += `
      <input type="checkbox" class="clickCheck" id="clickCheck${aux}" onclick="flidCardClick(${aux})" />
      <label class="card-container" for="clickCheck${aux}">
        <div class="card-content" id="${aux}">
          <div class="card-front">
            <div class="card-front-content">
              <div class="card-front-header">
                <img src="./assets/bandeiras/${bandeira}" alt="Bandeira ${local}">
                <div>
                  <label>${local}</label>
                </div>
              </div>

              <div class="card-front-body">
                <img src="./assets/pistas/${pista}" alt="Pista ${local}">
              </div>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-content">
              <div class="card-back-header">
                <h3>${nome}</h3>
              </div>

              <div class="card-back-body">
                <div>
                  <div class="primeiro-gp">
                    <p>Primeiro Grande Prêmio</p>
                    <label>${primeiro_gp}</label>
                  </div>
                  <div class="num-voltas">
                    <p>Número de voltas</p>
                    <label>${num_voltas}</label>
                  </div>
                </div>
                
                <div>
                  <div class="comp-circuito">
                    <p>Comprimento do circuito</p>
                    <label>${comp_circuito}</label>
                  </div>
                  <div class="dist-corrida">
                    <p>Distância da corrida</p>
                    <label>${dist_corrida}</label>
                  </div>
                </div>

                <div>
                  <div class="volta-record">
                    <p>Volta mais rápida</p>
                    <label>${volta_record}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </label>
    `;
  }
  document.querySelector("#lstPistas").innerHTML = html;
}

function carregaPilotos() {
  let html = "";
  for (item of pilotos) {
    const { nome, sobrenome, numero } = item.piloto;
    const { foto } = item;
    const { equipe, pais, podios, mundiais, nascimento } = item.info;

    html += `
      <div class="card-container">
        <div class="card-content">
          <div class="card-front">
            <div class="card-front-content">
              <div class="card-front-header">
                <img
                  src="./assets/pilotos/${foto}"
                  alt="Foto ${nome} ${sobrenome}"
                />
              </div>

              <div class="card-front-body">
                <h2>${nome} <span>${sobrenome}</span></h2>
                <h1>${numero}</h1>
              </div>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-content">
              <div class="card-back-header">
                <h3>${nome} ${sobrenome}</h3>
              </div>

              <div class="card-back-body">
                <div class="equipe">
                  <p>Equipe</p>
                  <label>${equipe}</label>
                </div>

                <div class="pais">
                  <p>País</p>
                  <label>${pais}</label>
                </div>

                <div class="podios">
                  <p>Pódios</p>
                  <label>${podios}</label>
                </div>

                <div class="mundiais">
                  <p>Campeonatos mundiais</p>
                  <label>${mundiais}</label>
                </div>

                <div class="nascimento">
                  <p>Data de nascimento</p>
                  <label>${nascimento}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  document.querySelector("#lstPilotos").innerHTML = html;
}

function carregaEquipes() {
  let html = "";
  for (item of equipes) {
    const { logo, carro } = item.imagens;
    const { nomeCompleto, chefe, estreia, mundiais, motor, base } =
      item.info;
    const { primeiro, segundo } = item.pilotos;

    html += `
      <div class="card-container">
        <div class="card-content">
          <div class="card-front">
            <div class="card-front-content">
              <div class="card-front-header">
                <img
                  src="./assets/equipes/${logo}"
                  alt="Logo ${item.nome}"
                />
                <div>
                  <label>${item.nome}</label>
                </div>
              </div>

              <div class="card-front-body">
                <img
                  src="./assets/carros/${carro}"
                  alt="Carro ${item.nome}"
                />
              </div>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-content">
              <div class="card-back-header">
                <h3>${nomeCompleto}</h3>
              </div>

              <div class="card-back-body">
                <div>
                  <div class="chefe-equipe">
                    <p>Chefe de equipe</p>
                    <label>${chefe}</label>
                  </div>
                  <div class="ano-entrada">
                    <p>Ano de estreia</p>
                    <label>${estreia}</label>
                  </div>
                  <div class="mundiais-equipe">
                    <p>Mundiais</p>
                    <label>${mundiais}</label>
                  </div>
                </div>

                <div>
                  <div class="motor">
                    <p>Motor</p>
                    <label>${motor}</label>
                  </div>
                  <div class="piloto">
                    <p>Primeiro piloto</p>
                    <label>${primeiro}</label>
                  </div>
                  <div class="piloto">
                    <p>Segundo piloto</p>
                    <label>${segundo}</label>
                  </div>
                </div>

                <div>
                  <div class="base">
                    <p>Base</p>
                    <label>${base}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  document.querySelector("#lstEquipes").innerHTML = html;
}

function carregaInfos() {
  let infos = document.querySelectorAll(".info-dado");

  infos[0].innerHTML = pistas.length;
  infos[1].innerHTML = pilotos.length;
  infos[2].innerHTML = equipes.length;
}

function validacaoForm() {
  document.querySelectorAll('#formCadastro input').forEach(input => {
    inputCheck(input)
  });
}

function inputCheck(input) {
  let stylePadrao = "1px solid #15151e";
  let styleErro = "2px solid #e10600";

  if(!input.checkValidity()) {
    input.style.border = styleErro;
    return input.style.border;
  }

  if(input.checkValidity()) {
    input.style.border = stylePadrao;
    return input.style.border;
  }
}

function flidCardClick(el) {
  let checkBox = document.querySelector(`#clickCheck${el}`);
  document.querySelectorAll(`.clickCheck`).forEach(checkItem => {
    if (checkItem !== checkBox) {
      checkItem.checked = false;
    }
  })
  
  document.querySelectorAll(".card-content").forEach(item => {
    if(parseInt(item.id) === el) {
      item.classList.add("clicado");
    } else {
      item.classList.remove("clicado");
    }
  })
}
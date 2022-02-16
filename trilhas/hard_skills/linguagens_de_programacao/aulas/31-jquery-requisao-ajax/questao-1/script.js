const URL_API = 'https://economia.awesomeapi.com.br'

$(document).ready(function(){

  function formatMoeda(valor) {
    return `R$ ${valor}`;
  }

  function makeLineTable(cotacao) {
    const {
      data,
      hora,
      valor_fechamento,
      valor_fechamento_minimo,
      valor_fechamento_maximo,
    } = formatDadosCotacaoMoeda(cotacao)
    return (
      `
      <tr>
        <td>${data}</td>
        <td>${hora}</td>
        <td>${valor_fechamento}</td>
        <td>${valor_fechamento_minimo}</td>
        <td>${valor_fechamento_maximo}</td>
      </tr>
      `
    )
  }

  function renderCotacoesMoeda(cotacoes) {
    let contentTable = `
      <tr>
        <th>Data</th>
        <th>Hora</th>
        <th>Valor Fecha.</th>
        <th>Valor Fecha. Mín</th>
        <th>Valor Fecha. Máx</th>
      </tr>
    `

    cotacoes.forEach(cotacao => {
      contentTable += makeLineTable(cotacao)
    })

    $('#table').html(contentTable)
  }

  function getCotacoesMoeda(moeda, start_date, end_date, quantidade) {
    $.ajax({
      type: "GET",
      url: `${URL_API}/${moeda}/${quantidade}?start_date=${start_date}&end_date=${end_date}`, 
      success: function (response) {
        renderCotacoesMoeda(response)
      }
    }); 
  }

  function formataNumero(numero) {
    if(numero < 10) {
      return `0${numero}`
    } 
    return `${numero}`
  }

  function convertTimestamps(timestamp) {
    return new Date(parseInt(timestamp, 10) * 1000)
  }

  function formatDadosCotacaoMoeda(dadosMoeda) {
    const dataCotacao = convertTimestamps(dadosMoeda.timestamp)
    return {
      data: `${formataNumero(dataCotacao.getDate())}/${formataNumero(dataCotacao.getMonth() + 1)}/${formataNumero(dataCotacao.getFullYear())}`,
      hora: `${formataNumero(dataCotacao.getHours())}:${formataNumero(dataCotacao.getMinutes())}`,
      valor_fechamento: formatMoeda(dadosMoeda.ask),
      valor_fechamento_minimo: formatMoeda(dadosMoeda.low),
      valor_fechamento_maximo: formatMoeda(dadosMoeda.high)
    }
  }

  function renderUltimaCotacaoMoeda(dadosMoeda, moeda) {
    if(dadosMoeda.length > 0) {
      const {
        data,
        hora,
        valor_fechamento,
        valor_fechamento_minimo,
        valor_fechamento_maximo,
      } = formatDadosCotacaoMoeda(dadosMoeda[0])
      $('#ultima-cotacao').html(
        `
          <div id="content-cotacao">
            <h2>Última Cotação ${moeda}</h2>
            <div>
              <span class="label">Data:</span>
              <span>${data}</span>
            </div>
            <div>
              <span class="label">Hora:</span>
              <span>${hora}</span>
            </div>
            <div>
              <span class="label">Valor Fechamento:</span>
              <span>${valor_fechamento}</span>
            </div>
            <div>
              <span class="label">Valor Fechamento Mínimo:</span>
              <span>${valor_fechamento_minimo}</span>
            </div>
            <div>
              <span class="label">Valor Fechamento Máximo:</span>
              <span>${valor_fechamento_maximo}</span>
            </div>
          <div>
        `
      )
    } else {
      $('#ultima-cotacao').html('Nenhuma informação disponível')
    }
  }

  function getUltimaCotacaoMoeda(moeda) {
    $.ajax({
      type: "GET",
      url: `${URL_API}/json/last/${moeda}`, 
      success: function (response) {
        renderUltimaCotacaoMoeda(Object.values(response), moeda)
      }
    }); 
  }

  function diasEntreDuasDatas(date1, date2) {
    const time1 = date1.getTime()
    const time2 = date2.getTime()

    return parseInt((time2 - time1)/(24 * 60 * 60 * 1000)) + 1
  }

  function getInputs() {
    let messageError = ''
    if($('#start_date').val() === '') messageError += '\n A Data Inicial é necessária!'
    if($('#end_date').val() === '') messageError += '\n A Data Final é necessária!'

    const dateStart = new Date($('#start_date').val())
    dateStart.setSeconds(0)
    dateStart.setMinutes(0)
    dateStart.setHours(0)
    const dateEnd =  new Date($('#end_date').val())
    dateEnd.setSeconds(0)
    dateEnd.setMinutes(0)
    dateEnd.setHours(0)

    if(dateStart.getTime() >= dateEnd.getTime()) messageError += '\n A Data Inicial deve ser maior que a Data Final!'
    
    const quantidade = diasEntreDuasDatas(dateStart, dateEnd)

    return {
      moeda: $('#droplist-moedas').val(),
      start_date: $('#start_date').val().replace('-', ''),
      end_date: $('#end_date').val().replace('-', ''),
      quantidade,
      status: messageError === '',
      messageError,
    }
  }

  $('#droplist-moedas').on('change', function () {
    getUltimaCotacaoMoeda(this.value)
  })

  $('#btn-pesquisar').on('click', function () {
    const {
      moeda,
      start_date,
      end_date,
      quantidade,
      status,
      messageError,
    } = getInputs()
    if(status) {
      getCotacoesMoeda(moeda, start_date, end_date, quantidade)
    } else {
      alert(messageError)
    }
  })

  function makeItemDropListMoedas(moeda) {
    return (
      `
        <option value="${moeda.code}-${moeda.codein}">${moeda.code}-${moeda.codein}</option>
      `
    )
  }

  function renderDropListMoedas(moedas) {
    let optionDropList = ''
    moedas.forEach(moeda => {
      optionDropList += makeItemDropListMoedas(moeda)
    } )
    $('#droplist-moedas').html(optionDropList)
    getUltimaCotacaoMoeda($('#droplist-moedas').val())
  }

  function getMoedas() {
    $.ajax({
      type: "GET",
      url: `${URL_API}/json/all`, 
      success: function (response) {
        renderDropListMoedas(Object.values(response))
      }
    });
  }

  getMoedas()

});

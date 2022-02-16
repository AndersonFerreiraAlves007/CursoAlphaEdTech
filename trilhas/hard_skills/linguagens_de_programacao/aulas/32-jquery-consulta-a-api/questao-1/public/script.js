const HOST_API = 'https://cep.awesomeapi.com.br'

$(document).ready(function () {

  function renderInfoCEP(cep) {
    $('#endereco-value').html(cep.address)
    $('#estado-value').html(cep.state)
    $('#complemento-value').html(cep.district)
    $('#cidade-value').html(cep.city)
    $('#ddd-value').html(cep.ddd)
    $('#latitude-value').html(cep.lat)
    $('#longitude-value').html(cep.lng)
  }

  function renderMap(cep) {
    $('#frame-maps').attr("src", `https://www.google.com/maps?api=1&q=${cep.lat}%2C${cep.lng}&hl=es;zoom=14&output=embed`);
  }
  
  function notifyError(msg) {
    alert(msg)
  }
  
  function getInputCEP() {
    let messageError = ''
    const cep = $('#input-search').val()

    const regex = /^\d/

    if(regex.test(cep)) {
      if(cep.length !== 8) {
        messageError += 'Deve ter 8 dígitos'
      } 
    } else {
      messageError += 'Só pode conter dígitos!'
    }

    return {
      cep,
      status: messageError === '',
      messageError
    }
  }
  
  function getCEP() {
    const {
      cep,
      status,
      messageError
    } = getInputCEP()
  
    if(status) {
      $.ajax(`${HOST_API}/json/${cep}`)
      .done(function(cep) {
        
        renderInfoCEP(cep)
        renderMap(cep)
      })
      .fail(function() {
        notifyError('Ocorreu um erro na requisição!!!')
      })
    } else {    
      notifyError(messageError)
    }
  }  

  $('#btn-search').on('click', function() {
    getCEP()
  })
}) 


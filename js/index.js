var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  //pegando dados no form
  var token = document.getElementById('token').value

  //função que envia a requisição http
  async function getData(url = '') {
    const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'content-type': 'application/json',
        'Authorization': token
    },
    });
    return response.json();
  }

  // Execução da função postData
  getData('http://localhost:3335/project/projects')
  .then(data => {
    document.getElementById("response").innerHTML = "Últimos cadastrados:"+JSON.stringify(data, null, 2)
  })
})
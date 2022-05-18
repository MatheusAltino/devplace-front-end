// Cadastro de Projetos

var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  //pegando dados no form
  var name = document.getElementById('name').value
  var stack = document.getElementById('stack').value
  var description = document.getElementById('description').value
  var link = document.getElementById('link').value
  var username = document.getElementById('username').value
  var token = document.getElementById('token').value

  //função que envia a requisição http
  async function postData(url = '', data = { }) {
    const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
    body: JSON.stringify(data),
    });
    return response.json();
  }

  // Execução da função postData
  postData('http://localhost:3335/project/create', {  
      name,
      stack,
      description,
      link,
      username
  })
  .then(data => {
    document.getElementById("response").innerHTML = "Projeto:"+JSON.stringify(data, null, 2)
  })
})
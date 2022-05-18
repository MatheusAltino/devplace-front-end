var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  //pegando dados no form
  var username = document.getElementById('username').value
  var token = document.getElementById('token').value

  //função que envia a requisição http
  async function postData(url = '', data = { }) {
    const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'content-type': 'application/json',
        'Authorization': token
    },
    body: JSON.stringify(data)
    });
    return response.json();
  }

  // Execução da função postData
  postData('http://localhost:3335/project/userprojects', {
      username
  })
  .then(data => {
    document.getElementById("response").innerHTML = "Projetos:"+JSON.stringify(data, null, 2)
  })
})
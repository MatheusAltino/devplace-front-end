var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  //pegando dados no form
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  //função que envia a requisição http
  async function postData(url = '', data = { }) {
    const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
    return response.json();
  }

  // Execução da função postData
  postData('http://localhost:3335/auth/authenticate', {  
      email, 
      password
    })
  .then(data => {
    document.getElementById("response").innerHTML = "Seu JsonWebToken é:"+JSON.stringify(data, null, 2)
  })
})
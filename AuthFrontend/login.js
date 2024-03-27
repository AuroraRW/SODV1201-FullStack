document.getElementById("btn").addEventListener("click", ()=>{
    let email = document.getElementById("email").value
    // console.log(email)
    let password = document.getElementById("password").value
    // console.log(password)
    fetch('http://localhost:7000/login', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then((response) => response.json())
  .then((token) => {
    // save token in localstorage
    window.localStorage.setItem('token', token.accessToken)
    // redirect to homepage
    window.location.href="index.html"
  
  });
})
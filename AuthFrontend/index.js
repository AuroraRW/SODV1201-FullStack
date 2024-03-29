// get token from localstorage
const token = window.localStorage.getItem("token") 
// console.log(token)
if(token){
  fetch('http://localhost:7000/', {
    method: 'GET', 
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json' 
    }
  })
  .then((response) => response.json())
  .then((data) => {
    if(data.role=="teacher"){
      let title = document.createElement("h1")
      title.innerHTML = "Show home page for teacher"
      document.getElementById("container").append(title)
      addLogout()

    }
    if(data.role=="student"){
      let title = document.createElement("h1")
      title.innerHTML = "Show home page for student"
      document.getElementById("container").append(title)
      addLogout()
    }  
  })
  .catch(err=>{
    window.location.href="login.html"
  })
}else{
  window.location.href="login.html"
}

const addLogout = ()=>{
  let logoutBtn = document.createElement("button")
  logoutBtn.innerHTML = "Logout"
  logoutBtn.addEventListener('click',()=>{
    window.localStorage.removeItem('token')
    window.location.href="login.html"
  })
  document.getElementById("container").append(logoutBtn)
}
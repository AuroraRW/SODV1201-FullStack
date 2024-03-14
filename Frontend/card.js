const cardContainer = document.querySelector('#card')
// fetch the data and append to DOM
fetch('http://localhost:7000/card')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    appendData(data)
  }
  );

const appendData = (cardData) => {
  cardContainer.innerHTML = ''
  cardData.forEach(card => {
    const cardDiv = document.createElement('div')
    cardDiv.setAttribute('id',`id_${card.id}`)

    const cardName = document.createElement('h3')
    cardName.innerHTML = card.name
    cardDiv.appendChild(cardName)

    // detail button
    const detailBtn = document.createElement('button')
    detailBtn.innerHTML = 'Detail'
    detailBtn.setAttribute('id',`detail_${card.id}`)
    let toggleBtn = true
    detailBtn.addEventListener('click', ()=>{
      if(toggleBtn==true){
        // show detail
        const detailEle = document.createElement('div')
        detailEle.innerHTML=`
          <h4>Description: ${card.description}<h4>
          <h4>Level: ${card.level}<h4>
          <h4>Point: ${card.point}<h4>
          <img src=${card.imageURL} width=100px>
        `
        cardName.after(detailEle)
        toggleBtn = false
      }else{
        cardDiv.getElementsByTagName('div')[0].remove()
        toggleBtn = true
      }
      
    })
    cardDiv.appendChild(detailBtn)

    // edit button
    const editBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'
    editBtn.setAttribute('id',`edit_${card.id}`)
    editBtn.addEventListener('click', ()=>{
      window.localStorage.setItem('data', JSON.stringify(card))
      window.location.href='edit.html'
    })
    cardDiv.appendChild(editBtn)

    // delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.setAttribute('id',`delete_${card.id}`)
    deleteBtn.addEventListener('click', ()=>{
      deleteCard(card.id)
    })
    
    cardDiv.appendChild(deleteBtn)
    cardContainer.appendChild(cardDiv)
  })

}

const deleteCard = (id) => {
  fetch('http://localhost:7000/card/' + id,
    { method: 'DELETE' })
    .then((response) => response.json())
    .then((data) => {
      appendData(data)
    })
}

document.getElementById("add").addEventListener('click',()=>{
  window.location.href='add.html'
})


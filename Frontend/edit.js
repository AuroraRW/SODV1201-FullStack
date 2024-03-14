let card = JSON.parse(window.localStorage.getItem("data"))
// console.log(card)
document.querySelector('[name="name"]').value = card.name
document.querySelector('[name="description"]').value = card.description
document.querySelector('[name="level"]').value = card.level
document.querySelector('[name="point"]').value = card.point
document.querySelector('[name="imageURL"]').value = card.imageURL

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault()

    let updateCard = {}
    updateCard.name = document.querySelector('[name="name"]').value
    updateCard.description = document.querySelector('[name="description"]').value
    updateCard.level = document.querySelector('[name="level"]').value
    updateCard.point = document.querySelector('[name="point"]').value
    updateCard.imageURL = document.querySelector('[name="imageURL"]').value

    fetch('http://localhost:7000/card/' + card.id, 
    {
        method: 'PUT',
        body: JSON.stringify(updateCard),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        window.location.href="card.html"
    });
})
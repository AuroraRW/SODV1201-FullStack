function addQuoteCardToContainer(quote, author, imageURL){
  document.querySelector('div').innerHTML+=
      `<div>
        <img src=${imageURL} width="200px">
            <h5>${quote}</h5>
            <p>${author}<p>
       </div>`
}
export {addQuoteCardToContainer}
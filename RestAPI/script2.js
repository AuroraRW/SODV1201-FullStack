import {addQuoteCardToContainer} from './function.js'
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

fetch(quoteURL)
.then(response=>{
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    return response.json()
})
.then(response=>{
    let quoteData = response
    // sort by author
    quoteData.sort((a,b)=>a.author < b.author ? -1: 1);

    fetch(imageURL)
    .then(response=>{
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        return response.json()
    })
    .then(imageData=>{
        let dataLength = Math.min(quoteData.length, imageData.length)
        for (let i=0;i<dataLength;i++){
            addQuoteCardToContainer(quoteData[i].text, quoteData[i].author, imageData[i].download_url)
        }
    })
})
.catch(error=>{
    console.log(error)
})

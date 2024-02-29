
import {addQuoteCardToContainer} from './function.js'
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

$(document).ready(()=>{
    $.getJSON(quoteURL, (quoteData)=>{
        // sort by author
        quoteData.sort((a,b)=>a.author < b.author ? -1: 1);
        $.getJSON(imageURL,(imageData)=>{
            let dataLength = Math.min(quoteData.length, imageData.length)
            for (let i=0;i<dataLength;i++){
                addQuoteCardToContainer(quoteData[i].text, quoteData[i].author, imageData[i].download_url)
            }
        })
    })
})


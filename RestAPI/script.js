// AJAX: Asynchronous JavaScript And XML
import {addQuoteCardToContainer} from './function.js'
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

const sendHTTPRequest = (method, url)=>{
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if (xhr.status >= 300){
                reject(`Error, status code ${xhr.status}: ${xhr.statusText}`)
            } else{
                let data = JSON.parse(xhr.response)
                resolve(data)
            }
        }
        xhr.open(method, url)
        xhr.send()
    })
}

sendHTTPRequest('GET', quoteURL)
.then(quoteData=>{
    quoteData.sort((a,b)=>a.author < b.author ? -1: 1);
    sendHTTPRequest('GET', imageURL)
    .then(imageData=>{
        let dataLength = Math.min(quoteData.length, imageData.length)
        for (let i=0; i<dataLength;i++){
            // create the element and append to DOM
            addQuoteCardToContainer(quoteData[i].text, quoteData[i].author, imageData[i].download_url)
        }
    })
})




